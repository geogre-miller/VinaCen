import supabase from "./supabaseClient";

export const fetchCategories = async () => {
  try {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { data: [], error: "Error fetching categories" };
  }
};
