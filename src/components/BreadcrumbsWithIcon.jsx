import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "@/apis/supabaseClient";

export function BreadcrumbsWithIcon() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [productNames, setProductNames] = useState({});

  useEffect(() => {
    const fetchProductNames = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("product_id, name");
      if (!error) {
        const namesMap = data.reduce((acc, product) => {
          acc[product.product_id] = product.name;
          return acc;
        }, {});
        setProductNames(namesMap);
      }
    };

    fetchProductNames();
  }, []);

  return (
    <Breadcrumbs className=" bg-white p-2">
      <Link to="/" className="opacity-60 hover:text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = productNames[value] || value;

        return (
          <Link
            key={to}
            to={to}
            className={`${
              isLast ? "text-black" : "opacity-60 hover:text-green-500"
            }`}
          >
            {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsWithIcon;
