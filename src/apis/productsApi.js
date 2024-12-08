import supabase from "./supabaseClient";

// Function to fetch products with optional category filtering
export const fetchProducts = async (category) => {
  try {
    let query = supabase.from("products").select("*");
    if (category && category !== "All") {
      query = query.eq("category", category);
    }
    const { data: products, error } = await query;
    if (error) throw error;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Function to fetch distinct categories from Supabase
export const fetchCategories = async () => {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("category");
    if (error) throw error;

    // Extract unique categories
    const uniqueCategories = Array.from(
      new Set(products.map((item) => item.category))
    );
    return uniqueCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
