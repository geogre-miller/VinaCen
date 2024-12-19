// Products.js
import React, {
  useState,
  useEffect,
  Suspense,
  lazy,
  useCallback,
  useMemo,
} from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import WorkWithUs from "@/components/WorkWithUs";
import SkeletonProductsCards from "@/components/SkeletonProductsCards";
import { fetchAllProductsFromApi } from "@/apis/productsApi"; // Import the new function
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";

const Sidebar = lazy(() => import("@/components/Sidebar"));
const ProductCard = lazy(() => import("@/components/Products/ProductsCards"));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = useCallback(async () => {
    setLoading(true);
    const { data: allProducts, error } = await fetchAllProductsFromApi(); // Use the new function

    if (error) {
      console.error("Error fetching products:", error);
      setFetchError("Error fetching products");
      setProducts([]);
    } else {
      setProducts(allProducts || []);
      setFetchError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const handleProductsUpdate = useCallback(
    (fetchedProducts, error, all = false) => {
      setLoading(false);
      if (error) {
        setFetchError("Error fetching products");
        setProducts([]);
      } else if (all) {
        fetchAllProducts();
      } else {
        setProducts(fetchedProducts || []);
        setFetchError(null);
      }
    },
    [fetchAllProducts]
  );

  const productCards = useMemo(
    () =>
      products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      )),
    [products]
  );

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
            <p className="text-red-500">{fetchError}</p>
          ) : products.length > 0 ? (
            productCards
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>

      <WorkWithUs />
      <Footer />
    </>
  );
};

export default Products;
