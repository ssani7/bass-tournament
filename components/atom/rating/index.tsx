import { Star } from "@/components/molecules/icons";

export const Rating = () => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} />
      ))}
    </div>
  );
};
