import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import { fetchCategories } from "@/apis/categoriesApi";
import { fetchProductsByCategories } from "@/apis/productsApi";

const Sidebar = ({ onProductsUpdate }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true); // Set loading to true before fetching
      const { data, error } = await fetchCategories();
      if (error) {
        setError(error); // Set error if fetching fails
      } else {
        setCategories(data); // Set categories if fetching is successful
      }
      setLoading(false); // Set loading to false after fetching
    };
    loadCategories();
  }, []);

  const handleCategoryToggle = async (categoryName) => {
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

    const { data, error } = await fetchProductsByCategories(categoryIds);
    onProductsUpdate(data, error);
  };

  if (loading) return <div>Loading ...</div>; // Loading state
  if (error) return <div>Error fetching categories: {error}</div>; // Error state

  return (
    <Card className="sticky top-24 left-0 h-[calc(100vh-6rem)] w-full max-w-[15rem] p-4 mb-4 ml-2 shadow-lg z-10 border-2 border-gray-600 overflow-hidden">
      <div className="mb-2 p-4">
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
          <ListItem key={index} className="p-0">
            <label className="flex w-full cursor-pointer items-center px-3 py-2 hover:bg-gray-100 rounded-md transition-shadow duration-200">
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
