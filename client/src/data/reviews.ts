export type CustomerReview = {
  id: string;
  name: string;
  quote: string;
  rating?: number;
  product?: string;
  photo?: string;
  photoAlt?: string;
  verifiedPurchase?: boolean;
};

// Add only customer feedback and photos approved for publication.
export const customerReviews: CustomerReview[] = [];
