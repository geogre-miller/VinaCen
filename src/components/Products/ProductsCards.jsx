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
  return (
    <Card className="w-96 border-2 border-blue-gray-800 shadow-md ">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={product.product_image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="text-base font-bold font-roboto"
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
          className="font-normal opacity-75 text-justify"
        >
          {product.short_desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/products/${product.product_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-sm text-blue-gray-900 shadow-none  transition-transform duration-300 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 font-roboto"
          >
            Tìm hiểu thêm
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProductsCards;
