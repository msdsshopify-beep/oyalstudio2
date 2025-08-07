import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alex Chen",
    rating: 5,
    comment: "Amazing quality and perfect fit. The oversized hoodie is incredibly comfortable!",
    product: "Oversized Hoodie"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Love the minimal aesthetic. Great materials and the customer service is top-notch.",
    product: "Minimal Tee"
  },
  {
    id: 3,
    name: "Marcus Williams",
    rating: 4,
    comment: "Fast shipping and exactly as described. Will definitely order again!",
    product: "Comfort Joggers"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="brand-font text-4xl md:text-5xl font-bold mb-4">
            WHAT CUSTOMERS SAY
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
            ))}
            <span className="ml-2 text-lg font-semibold">4.8/5 (2,847 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-background p-6 rounded-lg product-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{review.comment}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">Verified purchase • {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;