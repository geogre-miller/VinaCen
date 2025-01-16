import supabase from "./supabaseClient";

export const fetchAgencyReviews = async (agencyId) => {
  try {
    const { data, error } = await supabase
      .from("agency_reviews")
      .select(
        `
        *,
        user:user_id (
          email,
          user_metadata
        )
      `
      )
      .eq("agency_id", agencyId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { data: [], error: "Error fetching reviews" };
  }
};

export const createReview = async (agencyId, rating, comment) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { data: null, error: "You must be logged in to leave a review" };
    }

    const { data: existingReview, error: checkError } = await supabase
      .from("agency_reviews")
      .select("id")
      .eq("agency_id", agencyId)
      .eq("user_id", user.id)
      .single();

    if (checkError && checkError.code !== "PGRST116") throw checkError;
    if (existingReview) {
      return { data: null, error: "You have already reviewed this agency" };
    }

    const { data, error } = await supabase
      .from("agency_reviews")
      .insert([
        {
          agency_id: agencyId,
          user_id: user.id,
          rating,
          comment,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating review:", error);
    return { data: null, error: "Error creating review" };
  }
};

export const updateReview = async (reviewId, rating, comment) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { data: null, error: "You must be logged in to update a review" };
    }

    const { data, error } = await supabase
      .from("agency_reviews")
      .update({ rating, comment })
      .eq("id", reviewId)
      .eq("user_id", user.id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating review:", error);
    return { data: null, error: "Error updating review" };
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { data: null, error: "You must be logged in to delete a review" };
    }

    const { error } = await supabase
      .from("agency_reviews")
      .delete()
      .eq("id", reviewId)
      .eq("user_id", user.id);

    if (error) throw error;
    return { data: true, error: null };
  } catch (error) {
    console.error("Error deleting review:", error);
    return { data: null, error: "Error deleting review" };
  }
};
