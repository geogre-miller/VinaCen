import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Rating,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { createReview } from "@/apis/reviewsApi";

export function ReviewForm({ agencyId, onReviewSubmitted }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (rating === 0) {
      setError("Please select a rating");
      setIsSubmitting(false);
      return;
    }

    const { data, error } = await createReview(agencyId, rating, comment);

    if (error) {
      setError(error);
    } else {
      setRating(0);
      setComment("");
      onReviewSubmitted?.(data);
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="w-full">
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-4">
          Write a Review
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Typography color="blue-gray" className="mb-2">
              Rating
            </Typography>
            <Rating value={rating} onChange={(value) => setRating(value)} />
          </div>
          <div>
            <Typography color="blue-gray" className="mb-2">
              Comment
            </Typography>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
            />
          </div>
          {error && (
            <Typography color="red" className="text-sm">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default ReviewForm;
