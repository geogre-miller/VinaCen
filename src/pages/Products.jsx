import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WorkWithUs from "@/components/WorkWithUs";
import SkeletonProductsCards from "@/components/SkeletonProductsCards";
import supabase from "@/apis/supabaseClient";
import { fetchAllProductsFromApi } from "@/apis/productsApi";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";

const Sidebar = lazy(() => import("@/components/Products/Sidebar"));
const ProductCard = lazy(() => import("@/components/Products/ProductsCards"));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchAllProducts = useCallback(async () => {
    setLoading(true);
    const { data: allProducts, error } = await fetchAllProductsFromApi();

    if (error) {
      console.error("Error fetching products:", error);
      setFetchError(error);
    } else {
      setProducts(allProducts);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const handleProductsUpdate = useCallback((updatedProducts, error) => {
    if (error) {
      console.error("Error updating products:", error);
      setFetchError(error);
    } else {
      setProducts(updatedProducts);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="p-4">
        <BreadcrumbsWithIcon />
      </div>

      <div className="flex flex-col lg:flex-row">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar onProductsUpdate={handleProductsUpdate} />
        </Suspense>
        <div className="pl-4 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <SkeletonProductsCards count={3} />
          ) : fetchError ? (
            <div className="text-red-500">
              Error loading products: {fetchError.message}
            </div>
          ) : (
            products.map((product) => (
              <Suspense
                fallback={<div>Loading...</div>}
                key={product.product_id}
              >
                <ProductCard product={product} />
              </Suspense>
            ))
          )}
        </div>
      </div>
      <WorkWithUs />
      <Footer />
    </>
  );
};

export default Products;
