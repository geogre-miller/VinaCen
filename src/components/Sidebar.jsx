import React, { useEffect, useState, useCallback } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import supabase from "@/apis/supabaseClient";

const Sidebar = ({ onProductsUpdate }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  const fetchProducts = useCallback(
    async (categoryIds) => {
      const { data: products, error } = categoryIds.length
        ? await supabase
            .from("products")
            .select("*")
            .in("category_id", categoryIds)
            .order("product_id", { ascending: true })
        : await supabase
            .from("products")
            .select("*")
            .order("product_id", { ascending: true });
      onProductsUpdate(products, error);
    },
    [onProductsUpdate]
  );

  const handleCategoryToggle = (categoryName) => {
    let updatedCategories;

    if (categoryName === "Tất cả") {
      updatedCategories = selectedCategories.includes(categoryName)
        ? []
        : ["Tất cả"];
    } else {
      updatedCategories = selectedCategories.includes(categoryName)
        ? selectedCategories.filter((cat) => cat !== categoryName)
        : [...selectedCategories, categoryName];
    }

    setSelectedCategories(updatedCategories);

    const categoryIds = updatedCategories.includes("Tất cả")
      ? []
      : updatedCategories.map(
          (cat) => categories.find((c) => c.category_name === cat).category_id
        );

    fetchProducts(categoryIds);
  };

  useEffect(() => {
    fetchProducts([]);
  }, []);

  return (
    <Card className="sticky top-24 left-0 h-[calc(100vh-6rem)] w-full max-w-[15rem] p-4 mb-4 shadow-xl shadow-blue-gray-900/5 z-10 border-2 border-gray-600">
      <div className="mb-2 p-4 ">
        <Typography
          variant="h5"
          color="blue-gray"
          className="border-b-gray-600 border-b-2 pb-2 uppercase font-roboto"
        >
          Sản phẩm
        </Typography>
      </div>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} className="p-0 ">
            <label className="flex w-full cursor-pointer items-center px-3 py-2">
              <ListItemPrefix className="mr-3">
                <Checkbox
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  color="green"
                  checked={selectedCategories.includes(category.category_name)}
                  onChange={() => handleCategoryToggle(category.category_name)}
                />
              </ListItemPrefix>
              <Typography
                color="black"
                className="font-medium hover:text-green-500 transition-all duration-100"
              >
                {category.category_name}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Sidebar;
//
