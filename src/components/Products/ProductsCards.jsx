import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ProductsCards({ product }) {
  const displayPrice =
    product.price === null || product.price === 0
      ? "Liên hệ"
      : `$${parseFloat(product.price).toFixed(2)}`;

  // Handle category display with fallback
  const categoryName =
    product.categories?.category_name ||
    product.category_name ||
    (typeof product.categories === "string" ? product.categories : "");

  return (
    <Card className="w-full sm:max-w-[340px] lg:max-w-[380px] border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative h-64 sm:h-72 lg:h-80"
      >
        <img
          src={product.product_image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {categoryName && (
          <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm">
            {categoryName}
          </div>
        )}
      </CardHeader>
      <CardBody className="p-4 sm:p-6">
        <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Typography
            color="blue-gray"
            className="text-sm sm:text-base font-bold font-roboto"
          >
            Model: {product.code}
          </Typography>
          <Typography
            color="blue-gray"
            className="text-base font-bold font-roboto"
          >
            {displayPrice}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-justify text-sm sm:text-base line-clamp-3"
        >
          {product.short_desc}
        </Typography>
      </CardBody>

      <CardFooter className="pt-0 p-4 sm:p-6">
        <Link to={`/products/${product.product_id}`} className="block w-full">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-sm sm:text-base text-blue-gray-900 shadow-none 
                     hover:bg-blue-gray-900 hover:text-white
                     transition-all duration-300 
                     py-2.5 sm:py-3
                     font-roboto"
          >
            Tìm hiểu thêm
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProductsCards;
