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
import Footer from "@/components/Footer/Footer";
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
    const { data: allProducts, error } = await fetchAllProductsFromApi();

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

      {/* Main Content Layout */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-[15rem] flex-shrink-0">
            <Suspense fallback={<div>Loading...</div>}>
              <Sidebar onProductsUpdate={handleProductsUpdate} />
            </Suspense>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {loading ? (
                <SkeletonProductsCards count={6} />
              ) : fetchError ? (
                <p className="text-red-500">{fetchError}</p>
              ) : products.length > 0 ? (
                productCards
              ) : (
                <p className="col-span-full text-center py-8 text-gray-500">
                  No products available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <WorkWithUs />
      <Footer />
    </>
  );
};

export default Products;
