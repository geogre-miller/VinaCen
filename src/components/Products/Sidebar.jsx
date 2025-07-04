import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";
import supabase from "@/apis/supabaseClient";
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
      setLoading(true);
      const { data, error } = await fetchCategories();
      if (error) {
        setError(error);
      } else {
        setCategories(data);
      }
      setLoading(false);
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
      const withoutAll = selectedCategories.filter((cat) => cat !== "Tất cả");
      updatedCategories = selectedCategories.includes(categoryName)
        ? withoutAll.filter((cat) => cat !== categoryName)
        : [...withoutAll, categoryName];
    }

    setSelectedCategories(updatedCategories);

    const categoryIds = updatedCategories.includes("Tất cả")
      ? []
      : updatedCategories
          .map(
            (cat) =>
              categories.find((c) => c.category_name === cat)?.category_id
          )
          .filter(Boolean);

    const { data, error } = await fetchProductsByCategories(categoryIds);

    const productsWithCategories = data?.map((product) => ({
      ...product,
      category_name: categories.find(
        (c) => c.category_id === product.category_id
      )?.category_name,
    }));

    onProductsUpdate(productsWithCategories, error);
  };

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error fetching categories: {error}</div>;

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <IconButton
          color="white"
          className="rounded-full bg-blue-gray-900 shadow-lg p-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
            />
          </svg>
        </IconButton>
      </div>
      <Card
        className={`
         h-[calc(100vh-80px)] 
         lg:sticky lg:top-[80px] lg:left-2 lg:mb-[13px]
         w-full max-w-[15rem] 
         p-4 shadow-lg z-40 
         border-2 border-gray-600 
         bg-white
         transition-all duration-300
         scrollbar-hide
         ${
           isSidebarOpen
             ? "fixed top-20 left-0 transform translate-x-0  "
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
            Danh mục sản phẩm
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden ml-2"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>
        {/* Categories List with Scrollable Container */}
        <div className="overflow-y-auto scrollbar-hide h-[calc(100%-4rem)]">
          <List>
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
        </div>
      </Card>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};
export default Sidebar;
