import { useEffect, useState, useCallback, useMemo } from "react";
import supabase from "@/apis/supabaseClient";
import { useToast } from "@/components/Toast";
import AdminAnalytics from "@/components/admin/AdminAnalytics";
import ProductTable from "@/components/admin/ProductTable";
import ProductModal from "@/components/admin/ProductModal";
import ConfirmDeleteModal from "@/components/admin/ConfirmDeleteModal ";

const CATEGORIES = ["Ốp tường", "Ốp trần", "Lam sóng", "Khác"];

export default function AdminProducts() {
  const { toast } = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);

  // Memoized fetch function to prevent unnecessary re-renders
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.from("products").select("*");
      
      if (error) {
        throw error;
      }
      
      // Ensure data is always an array
      const validProducts = Array.isArray(data) ? data : [];
      
      // Add unique keys if missing
      const productsWithKeys = validProducts.map((product, index) => ({
        ...product,
        // Ensure each product has a unique identifier
        key: product.id || product.product_id || `product-${index}`,
        // Normalize data types to prevent comparison issues
        price: product.price ? Number(product.price) : 0,
        stock: product.stock ? Number(product.stock) : 0,
        status: product.status || 'active',
        categories: product.categories || '',
        name: product.name || '',
        short_desc: product.short_desc || product.description || '',
        product_image: product.product_image || product.image || null
      }));
      
      setProducts(productsWithKeys);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message || "Failed to fetch products");
      toast({ type: "error", message: "Failed to fetch products: " + (error.message || "Unknown error") });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Analytics calculations with error handling
  const analytics = useMemo(() => {
    try {
      const totalProducts = products.length;
      const outOfStock = products.filter((p) => {
        const stock = Number(p.stock);
        return !isNaN(stock) && stock === 0;
      }).length;
      
      const totalRevenue = products.reduce((sum, p) => {
        const price = Number(p.price) || 0;
        const stock = Number(p.stock) || 0;
        return sum + (price * stock);
      }, 0);
      
      const activeCampaigns = 2; // Static value as in original

      return {
        totalProducts,
        outOfStock,
        totalRevenue,
        activeCampaigns
      };
    } catch (error) {
      console.error("Error calculating analytics:", error);
      return {
        totalProducts: 0,
        outOfStock: 0,
        totalRevenue: 0,
        activeCampaigns: 0
      };
    }
  }, [products]);

  // Handle save product with comprehensive error handling
  const handleSaveProduct = useCallback(async (productData) => {
    if (!productData) {
      toast({ type: "error", message: "Product data is required" });
      return;
    }

    setModalLoading(true);
    try {
      // Validate required fields
      if (!productData.name || !productData.price || !productData.categories) {
        throw new Error("Name, price, and category are required fields");
      }

      // Prepare and validate data for Supabase
      const dbData = {
        name: String(productData.name).trim(),
        short_desc: String(productData.short_desc || '').trim(),
        price: Number(productData.price),
        categories: String(productData.categories).trim(),
        stock: Number(productData.stock) || 0,
        status: productData.status || 'active',
        product_image: typeof productData.product_image === 'string' ? productData.product_image : null,
      };

      // Validate price
      if (isNaN(dbData.price) || dbData.price < 0) {
        throw new Error("Price must be a valid positive number");
      }

      // Validate stock
      if (isNaN(dbData.stock) || dbData.stock < 0) {
        throw new Error("Stock must be a valid non-negative number");
      }

      let result;
      
      if (editProduct && editProduct.id) {
        // Update existing product
        result = await supabase
          .from("products")
          .update(dbData)
          .eq("id", editProduct.id)
          .select();
      } else {
        // Create new product
        result = await supabase
          .from("products")
          .insert([dbData])
          .select();
      }

      if (result.error) {
        throw result.error;
      }

      // Refresh products list instead of partial update to avoid inconsistencies
      await fetchProducts();
      
      // Reset modal state
      setModalOpen(false);
      setEditProduct(null);
      
      toast({ 
        type: "success", 
        message: editProduct ? "Product updated successfully" : "Product created successfully" 
      });
    } catch (error) {
      console.error("Error saving product:", error);
      toast({ 
        type: "error", 
        message: "Failed to save product: " + (error.message || "Unknown error")
      });
    } finally {
      setModalLoading(false);
    }
  }, [editProduct, fetchProducts, toast]);

  // Handle delete product with error handling
  const handleDeleteProduct = useCallback(async () => {
    if (!deleteProduct || !deleteProduct.id) {
      toast({ type: "error", message: "Invalid product selected for deletion" });
      return;
    }
    
    setDeleteLoading(true);
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", deleteProduct.id);

      if (error) {
        throw error;
      }

      // Update local state immediately for better UX
      setProducts(prevProducts => 
        prevProducts.filter(p => p.id !== deleteProduct.id)
      );
      
      setDeleteOpen(false);
      setDeleteProduct(null);
      toast({ type: "success", message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast({ 
        type: "error", 
        message: "Failed to delete product: " + (error.message || "Unknown error")
      });
      // Refresh products to ensure consistency
      await fetchProducts();
    } finally {
      setDeleteLoading(false);
    }
  }, [deleteProduct, fetchProducts, toast]);

  // Handle modal operations with error handling
  const handleAddProduct = useCallback(() => {
    try {
      setEditProduct(null);
      setModalOpen(true);
    } catch (error) {
      console.error("Error opening add product modal:", error);
      toast({ type: "error", message: "Failed to open add product form" });
    }
  }, [toast]);

  const handleEditProduct = useCallback((product) => {
    try {
      if (!product || !product.id) {
        throw new Error("Invalid product selected for editing");
      }
      setEditProduct(product);
      setModalOpen(true);
    } catch (error) {
      console.error("Error opening edit product modal:", error);
      toast({ type: "error", message: "Failed to open edit product form" });
    }
  }, [toast]);

  const handleDeleteClick = useCallback((product) => {
    try {
      if (!product || !product.id) {
        throw new Error("Invalid product selected for deletion");
      }
      setDeleteProduct(product);
      setDeleteOpen(true);
    } catch (error) {
      console.error("Error opening delete confirmation:", error);
      toast({ type: "error", message: "Failed to open delete confirmation" });
    }
  }, [toast]);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setEditProduct(null);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setDeleteOpen(false);
    setDeleteProduct(null);
  }, []);

  // Error boundary for the entire component
  if (error) {
    return (
      <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Products</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => {
              setError(null);
              fetchProducts();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen p-4 md:p-8">
      <AdminAnalytics
        totalProducts={analytics.totalProducts}
        outOfStock={analytics.outOfStock}
        totalRevenue={analytics.totalRevenue}
        activeCampaigns={analytics.activeCampaigns}
      />
      <div className="mt-8">
        <ProductTable
          products={products}
          categories={CATEGORIES}
          loading={loading}
          onAdd={handleAddProduct}
          onEdit={handleEditProduct}
          onDelete={handleDeleteClick}
        />
      </div>
      <ProductModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProduct}
        categories={CATEGORIES}
        initialData={editProduct}
        loading={modalLoading}
      />
      <ConfirmDeleteModal
        open={deleteOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteProduct}
        loading={deleteLoading}
        product={deleteProduct}
      />
    </div>
  );
}