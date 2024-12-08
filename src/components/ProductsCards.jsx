import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProductsCards({ product }) {
  const displayPrice =
    product.price === null || product.price === 0
      ? "Liên hệ"
      : `$${parseFloat(product.price).toFixed(2)}`;
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={product.product_image} // Use product image URL from props
          alt={product.name} // Use product name for alt text
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="text-base font-bold font-roboto"
          >
            Model: {product.code} {/* Use product name from props */}
          </Typography>
          <Typography
            color="blue-gray"
            className="text-base font-bold font-roboto"
          >
            {displayPrice} {/* Display price or "Liên hệ" */}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-justify"
        >
          {product.short_desc} {/* Use product description from props */}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-sm text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 font-roboto"
        >
          Tìm hiểu thêm
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductsCards;
