import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowIcon, HeartIcon } from "../layouts/StorefrontLayout";
import { bestSellers } from "../data/products";
import Carousel from "./Carousel";

const BestSellers = () => {
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  const toggleLikedProduct = (productName: string) => {
    setLikedProducts((current) => (
      current.includes(productName)
        ? current.filter((name) => name !== productName)
        : [...current, productName]
    ));
  };

  return (
    <section className="bg-[#f3eee9] py-[clamp(4.8rem,9vw,8rem)] text-[#241812]" id="best-sellers">
      <div className="mx-auto mb-[clamp(2.2rem,4vw,3.8rem)] flex max-w-[112rem] items-end justify-between px-[clamp(1.35rem,5vw,5.6rem)] max-md:grid max-md:items-start max-md:gap-[1.6rem]">
        <div>
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#9b7962]">The pairs people love</p>
          <h2 className="m-0 font-[Manrope,sans-serif] text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[.95] tracking-[-.07em]">Best sellers.</h2>
        </div>
        <a
          className="inline-flex items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]"
          href="/collections?category=Best%20sellers"
        >
          View all best sellers
          <ArrowIcon />
        </a>
      </div>

      <Carousel
        ariaLabel="Best seller products"
        className="mx-auto max-w-[112rem] overflow-hidden px-[clamp(1.35rem,5vw,5.6rem)]"
        id="best-sellers-carousel"
        items={bestSellers}
        renderItem={(product, index, { motionIsEnabled }) => {
          const isLiked = likedProducts.includes(product.name);

          return (
            <motion.article
              className="group relative flex h-[31rem] w-[clamp(18rem,28vw,25rem)] shrink-0 snap-start flex-col overflow-hidden rounded-[1.2rem] border border-[#241812]/15 bg-[#f8f5f1] px-6 pb-6 pt-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(36,24,18,.1)] max-md:h-[27rem] max-md:w-[18.5rem]"
              initial={motionIsEnabled ? { opacity: 0, y: 24 } : false}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
              viewport={{ amount: 0.25, once: true }}
              whileHover={motionIsEnabled ? { y: -6 } : undefined}
              whileInView={motionIsEnabled ? { opacity: 1, y: 0 } : undefined}
              whileTap={motionIsEnabled ? { scale: 0.985 } : undefined}
            >
              <span aria-hidden="true" className="absolute left-0 top-11 h-12 w-1" style={{ backgroundColor: product.accent }} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[.82rem] text-[#9a948f]">{product.type}</p>
                  <h3 className="m-0 font-[Manrope,sans-serif] text-[1.2rem] font-semibold tracking-[-.04em]">{product.name}</h3>
                </div>
                <button
                  aria-label={`${isLiked ? "Remove" : "Add"} ${product.name} ${isLiked ? "from" : "to"} favourites`}
                  aria-pressed={isLiked}
                  className={`mt-[-.35rem] inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${isLiked ? "border-[#241812] bg-[#241812] text-white" : "border-[#241812]/15 text-[#241812] hover:border-[#241812]/40"}`}
                  onClick={() => toggleLikedProduct(product.name)}
                  type="button"
                >
                  <HeartIcon filled={isLiked} />
                </button>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center px-1 py-5">
                <a
                  aria-label={`View details for ${product.name}`}
                  className="block aspect-[1.28] w-full overflow-hidden rounded-[.45rem]"
                  href={`/products/${product.slug}`}
                >
                  <motion.img
                    alt={product.name}
                    className="h-full w-full object-contain mix-blend-multiply"
                    loading="lazy"
                    src={product.image}
                    transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                    whileHover={motionIsEnabled ? { scale: 1.04 } : undefined}
                  />
                </a>
              </div>

              <div>
                <p className="mb-2 text-[.78rem] text-[#9a948f]">Price</p>
                <strong className="font-[Manrope,sans-serif] text-[1.35rem] font-semibold tracking-[-.04em]">{product.price}</strong>
              </div>
            </motion.article>
          );
        }}
        viewportClassName="gap-5 pb-5"
      />
    </section>
  );
};

export default BestSellers;
