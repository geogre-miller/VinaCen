import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import supabase from "@/apis/supabaseClient";

const Sidebar = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("category_name");
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data.map((item) => item.category_name));
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryToggle = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <Card className="sticky top-24 left-0 h-[calc(100vh-6rem)] w-full max-w-[15rem] p-4 mb-4 shadow-xl shadow-blue-gray-900/5 z-10">
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
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                />
              </ListItemPrefix>
              <Typography color="black" className="font-medium">
                {category}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Sidebar;
