import supabase from "./supabaseClient";

// Fetch all products with categories
export const fetchAllProductsFromApi = async () => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        categories!products_category_id_fkey (category_name)
      `
      )
      .order("product_id", { ascending: true });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching all products:", error);
    return { data: [], error: "Error fetching products" };
  }
};

// Fetch products by category IDs
export const fetchProductsByCategories = async (categoryIds = []) => {
  try {
    const query =
      categoryIds.length > 0
        ? supabase
            .from("products")
            .select("*")
            .in("category_id", categoryIds)
            .order("product_id", { ascending: true })
        : supabase
            .from("products")
            .select("*")
            .order("product_id", { ascending: true });

    const { data, error } = await query;
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching products by categories:", error);
    return { data: [], error: "Error fetching products" };
  }
};

// Fetch single product with images
export const fetchProductAndImages = async (productId) => {
  try {
    const { data: productData, error: productError } = await supabase
      .from("products")
      .select("*")
      .eq("product_id", productId)
      .single();

    if (productError) throw productError;
    if (!productData) throw new Error("Product not found.");

    const { data: images, error: imagesError } = await supabase.storage
      .from("products_images")
      .list(productData.code);

    if (imagesError) throw imagesError;

    const imageUrls = images.map((image) => {
      const { data } = supabase.storage
        .from("products_images")
        .getPublicUrl(`${productData.code}/${image.name}`);
      return data.publicUrl;
    });

    return {
      data: { product: productData, images: imageUrls.filter(Boolean) },
      error: null,
    };
  } catch (error) {
    console.error("Error fetching product and images:", error);
    return { data: null, error: error.message || "An error occurred" };
  }
};
