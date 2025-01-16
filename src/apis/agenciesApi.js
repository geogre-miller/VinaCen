import supabase from "./supabaseClient";

export const fetchAgencies = async () => {
  try {
    const { data, error } = await supabase
      .from("agencies")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching agencies:", error);
    return { data: [], error: "Error fetching agencies" };
  }
};

export const fetchAgencyById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("agencies")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching agency:", error);
    return { data: null, error: "Error fetching agency" };
  }
};

export const filterAgencies = async (province, area) => {
  try {
    let query = supabase
      .from("agencies")
      .select("*")
      .order("id", { ascending: true });

    if (province) {
      query = query.eq("province", province);
    }
    if (area) {
      query = query.eq("area", area);
    }

    const { data, error } = await query;
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error filtering agencies:", error);
    return { data: [], error: "Error filtering agencies" };
  }
};

export const createAgency = async (agencyData) => {
  try {
    const { data, error } = await supabase
      .from("agencies")
      .insert([agencyData])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating agency:", error);
    return { data: null, error: "Error creating agency" };
  }
};

export const updateAgency = async (id, updates) => {
  try {
    const { data, error } = await supabase
      .from("agencies")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error updating agency:", error);
    return { data: null, error: "Error updating agency" };
  }
};
