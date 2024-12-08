import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductsCards";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkWithUs from "@/components/WorkWithUs";
import supabase from "@/apis/supabaseClient";
import SkeletonProductsCards from "@/components/SkeletonProductsCards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductsByCategories = async (categories) => {
    setLoading(true);
    try {
      const { data, error } = categories.length
        ? await supabase
            .from("products")
            .select("*")
            .in("category_name", categories) // Ensure this matches your column name
        : await supabase.from("products").select("*");

      if (error) {
        setFetchError("Error fetching products");
        setProducts([]);
      } else {
        setProducts(data || []);
        setFetchError(null);
      }
    } catch (err) {
      setFetchError("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsByCategories([]);
  }, []);

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar onCategoryChange={fetchProductsByCategories} />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <SkeletonProductsCards count={3} />
          ) : fetchError ? (
            <p className="text-red-500">{fetchError}</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
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
