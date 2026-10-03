import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "../layouts/StorefrontLayout";
import { customerReviews, type CustomerReview } from "../data/reviews";
import Carousel from "./Carousel";

const CustomerReviews = () => {
  const shouldReduceMotion = useReducedMotion();
  const hasReviews = customerReviews.length > 0;
  const slides: (CustomerReview | null)[] = hasReviews
    ? customerReviews
    : [null];

  return (
    <section
      aria-labelledby="customer-reviews-heading"
      className="bg-[#f3eee9] text-[#241812]"
      id="customer-reviews"
    >
      <div className="mx-auto max-w-[112rem] px-[clamp(1.35rem,5vw,5.6rem)]">
        <div className="mb-[clamp(2rem,5vw,4rem)] max-w-[48rem]">
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">
            The people behind the pairs
          </p>
          <h2
            className="m-0 font-[Manrope,sans-serif] text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[.95] tracking-[-.075em]"
            id="customer-reviews-heading"
          >
            Customer reviews.
          </h2>
          <p className="mt-5 max-w-[37rem] leading-[1.7] text-[#765e52]">
            {hasReviews
              ? "First-hand experiences from customers who found their next pair with Dontire."
              : "We are gathering first-hand feedback. Customer quotes and photos will appear here when shared with permission."}
          </p>
        </div>

        <Carousel
          ariaLabel="Customer reviews"
          className="pb-20"
          id="customer-reviews-carousel"
          items={slides}
          showControls={customerReviews.length > 1}
          showPauseControl={false}
          viewportClassName="gap-5"
          controlsClassName="!bottom-0 !right-0"
          renderItem={(review, index) => (
            <motion.article
              className="grid w-full min-w-0 shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-[#241812]/10 bg-[#fbf8f5] min-[800px]:min-h-[32rem] min-[800px]:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55 }}
              viewport={{ amount: 0.2, once: true }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              key={review?.id ?? "reviews-pending"}
            >
              <div className="relative min-h-[13rem] overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#503329_0%,#261b15_55%,#15110f_100%)] min-[800px]:min-h-full">
                {review?.photo ? (
                  <img
                    alt={review.photoAlt ?? `Photo shared by ${review.name}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    src={review.photo}
                  />
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[6rem] -right-[3rem] font-[Manrope,sans-serif] text-[clamp(18rem,35vw,33rem)] font-light leading-none text-[#f8f1ed]/10"
                    >
                      “
                    </span>
                    <div className="absolute bottom-6 left-6 right-6 border-t border-white/25 pt-4 text-[.7rem] font-bold uppercase tracking-[.18em] text-[#f4d7c9] min-[800px]:bottom-10 min-[800px]:left-10 min-[800px]:right-10">
                      Stories in every step
                    </div>
                  </>
                )}
              </div>

              <div className="flex min-w-0 flex-col justify-between p-[clamp(1.5rem,4vw,4.5rem)]">
                {review ? (
                  <>
                    <div>
                      <div className="mb-8 flex items-center justify-between gap-4">
                        {review.rating != null ? (
                          <span
                            aria-label={`${review.rating} out of 5 stars`}
                            className="relative inline-block whitespace-nowrap text-[1.15rem] tracking-[.16em]"
                            role="img"
                          >
                            <span aria-hidden="true" className="text-[#d8c7bb]">
                              ★★★★★
                            </span>
                            <span
                              aria-hidden="true"
                              className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-[#bf8a37]"
                              style={{
                                width: `${Math.max(0, Math.min(100, (review.rating / 5) * 100))}%`,
                              }}
                            >
                              ★★★★★
                            </span>
                          </span>
                        ) : (
                          <span className="text-[.7rem] font-bold uppercase tracking-[.15em] text-[#a85c48]">
                            Customer story
                          </span>
                        )}
                        <span className="text-[.72rem] font-semibold text-[#9a8175]">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(customerReviews.length).padStart(2, "0")}
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-[Manrope,sans-serif] text-[5rem] leading-[.55] text-[#b98370]/30"
                      >
                        “
                      </span>
                      <blockquote className="m-0 mt-5 max-w-[42rem] font-[Manrope,sans-serif] text-[clamp(1.35rem,2.5vw,2.5rem)] font-medium leading-[1.3] tracking-[-.045em]">
                        {review.quote}
                      </blockquote>
                    </div>
                    <div className="mt-10 border-t border-[#241812]/12 pt-5">
                      <p className="font-[Manrope,sans-serif] text-[1rem] font-semibold">
                        {review.name}
                      </p>
                      <p className="mt-1 text-[.8rem] text-[#866752]">
                        {[
                          review.verifiedPurchase ? "Verified buyer" : null,
                          review.product,
                        ]
                          .filter(Boolean)
                          .join(" · ") || "Customer"}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <span className="text-[.7rem] font-bold uppercase tracking-[.15em] text-[#a85c48]">
                        Real voices, real pairs
                      </span>
                      <h3 className="mt-6 max-w-[34rem] font-[Manrope,sans-serif] text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.04] tracking-[-.065em]">
                        Your story could be next.
                      </h3>
                      <p className="mt-6 max-w-[32rem] text-[1rem] leading-[1.7] text-[#765e52]">
                        We will share customer experiences here once reviews are
                        available and approved for publication.
                      </p>
                    </div>
                    <a
                      className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]"
                      href="/collections"
                    >
                      Explore the collection
                      <ArrowIcon />
                    </a>
                  </>
                )}
              </div>
            </motion.article>
          )}
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
