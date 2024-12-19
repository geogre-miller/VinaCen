import supabase from "./supabaseClient";

export const fetchBlogs = async () => {
  try {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { data: [], error: "Error fetching blogs" };
  }
};
