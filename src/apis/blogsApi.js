import supabase from "./supabaseClient";

export const fetchBlogs = async () => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("date", { ascending: false });
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { data: [], error: "Error fetching blogs" };
  }
};

export const fetchBlogById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { data: null, error: "Error fetching blog" };
  }
};

export const fetchBlogTitle = async (id) => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("title")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return { data: data?.title || "", error: null };
  } catch (error) {
    console.error("Error fetching blog title:", error);
    return { data: "", error: "Error fetching blog title" };
  }
};
