import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";
import { fetchCategories } from "@/apis/categoriesApi";
import { fetchProductsByCategories } from "@/apis/productsApi";
import { FilterIcon } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ onProductsUpdate }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

  if (error) return <div>Error fetching categories: {error}</div>;

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <IconButton
          color="white"
          className="rounded-full bg-green-500 shadow-lg p-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <FilterIcon className="h-6 w-6" />
        </IconButton>
      </div>

      {/* Sidebar Container */}
      <Card
        className={`
          lg:sticky lg:top-24 lg:left-0 
          h-[calc(100vh-6rem)] 
          w-full max-w-[15rem] 
          p-4 shadow-lg z-40 
          border-2 border-gray-600 
          bg-white
          transition-transform duration-300
          ${
            isSidebarOpen
              ? "fixed top-0 left-0 transform translate-x-0"
              : "lg:transform lg:translate-x-0 fixed top-0 -translate-x-full"
          }
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-2 p-4">
          <Typography
            variant="h5"
            color="blue-gray"
            className="border-b-gray-600 border-b-2 pb-2 uppercase font-roboto"
          >
            Sản phẩm
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>

        {/* Categories List */}
        <List className="overflow-y-auto h-[calc(100%-5rem)]">
          {categories.map((category, index) => (
            <ListItem key={index} className="p-0">
              <label className="flex w-full cursor-pointer items-center px-3 py-2 hover:bg-gray-100 rounded-md">
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    color="green"
                    checked={selectedCategories.includes(
                      category.category_name
                    )}
                    onChange={() =>
                      handleCategoryToggle(category.category_name)
                    }
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
    </>
  );
};

export default Sidebar;
