import { Card, CardBody, Typography, Rating } from "@material-tailwind/react";
import { formatDistanceToNow } from "date-fns";

export function ReviewsList({ reviews }) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <Typography variant="h6" color="blue-gray">
                {review.user.email}
              </Typography>
              <Typography color="gray" className="text-sm">
                {formatDistanceToNow(new Date(review.created_at), {
                  addSuffix: true,
                })}
              </Typography>
            </div>
            <Rating value={review.rating} readonly />
            {review.comment && (
              <Typography className="mt-2">{review.comment}</Typography>
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
export default ReviewsList;
