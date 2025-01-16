import { Star } from "lucide-react";

export const Rating = ({ value, readonly = false, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= value
              ? "fill-yellow-400 text-yellow-400"
              : "fill-none text-gray-300"
          } ${!readonly && "cursor-pointer"}`}
          onClick={() => !readonly && onChange?.(star)}
        />
      ))}
    </div>
  );
};
