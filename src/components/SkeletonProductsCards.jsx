import { Button, Typography } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";

const SkeletonProductsCards = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="w-96 animate-pulse">
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96 bg-gray-300"
          >
            <div className="h-full w-full bg-gray-300"></div>
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography
                as="div"
                className="h-4 w-32 bg-gray-300 rounded-full"
              >
                &nbsp;
              </Typography>
              <Typography
                as="div"
                className="h-4 w-16 bg-gray-300 rounded-full"
              >
                &nbsp;
              </Typography>
            </div>
            <Typography
              as="div"
              className="h-3 w-full bg-gray-300 rounded-full mb-2"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              className="h-3 w-full bg-gray-300 rounded-full mb-2"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              className="h-3 w-full bg-gray-300 rounded-full mb-2"
            >
              &nbsp;
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-full bg-gray-300 shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default SkeletonProductsCards;
