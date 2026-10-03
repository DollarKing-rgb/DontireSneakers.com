import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon, BagIcon, HeartIcon } from "../layouts/StorefrontLayout";
import { featuredProducts } from "../data/products";

const filters = [
  "All",
  "Sneakers",
  "Sports Shoes",
  "Boots",
  "Official Shoes",
  "Open Shoes",
];

const FeaturedCollection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const visibleProducts = useMemo(
    () => activeFilter === "All"
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === activeFilter),
    [activeFilter]
  );

  const toggleLikedProduct = (productName: string) => {
    setLikedProducts((current) => (
      current.includes(productName)
        ? current.filter((name) => name !== productName)
        : [...current, productName]
    ));
  };

  return (
    <section className="bg-[#f3eee9] py-[clamp(3rem,6vw,2rem)] text-[#241812]" id="featured-collection">
      <div className="mx-auto max-w-[112rem] px-[clamp(1.35rem,5vw,5.6rem)]">
        <div className="mb-[clamp(2.2rem,4vw,3.8rem)] max-w-[48rem]">
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#9b7962]">Selected for your rotation</p>
          <h2 className="m-0 font-[Manrope,sans-serif] text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[.95] tracking-[-.07em]">Featured collection.</h2>
          <p className="mt-6 max-w-[32rem] leading-[1.65] text-[#866752]">
            Discover everyday pairs, work-ready essentials and shoes made for an active Kenyan lifestyle.
          </p>
        </div>

        <div aria-label="Filter featured collection" className="mb-8 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                aria-selected={isActive}
                className={`shrink-0 rounded-full px-5 py-3 text-[.78rem] font-semibold transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 ${isActive ? "bg-[#c9504d] text-white" : "bg-[#f8f5f1] text-[#866752] hover:bg-[#eadfd6]"}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                role="tab"
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 min-[640px]:grid-cols-2 min-[1100px]:grid-cols-3">
          {visibleProducts.map((product, index) => {
            const isLiked = likedProducts.includes(product.name);

            return (
              <motion.article
                className="group relative flex min-h-[31rem] flex-col overflow-hidden rounded-[1.2rem] border border-[#241812]/10 bg-[#f8f5f1] p-6 transition-[box-shadow,transform] duration-300 hover:shadow-[0_18px_40px_rgba(36,24,18,.1)]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                key={product.slug}
                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                viewport={{ amount: 0.2, once: true }}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-[#f0eeeb] px-3 py-2 text-[.7rem] font-semibold text-[#6f665f]">
                    {product.badge ?? "Featured"}
                  </span>
                  <button
                    aria-label={`${isLiked ? "Remove" : "Add"} ${product.name} ${isLiked ? "from" : "to"} favourites`}
                    aria-pressed={isLiked}
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-200 hover:scale-105 ${isLiked ? "border-[#241812] bg-[#241812] text-white" : "border-[#241812]/15 text-[#241812] hover:border-[#241812]/40"}`}
                    onClick={() => toggleLikedProduct(product.name)}
                    type="button"
                  >
                    <HeartIcon filled={isLiked} />
                  </button>
                </div>

                <a
                  aria-label={`View details for ${product.name}`}
                  className="mt-5 block aspect-[1.2] w-full overflow-hidden rounded-[.55rem]"
                  href={`/products/${product.slug}`}
                >
                  <motion.img
                    alt={product.name}
                    className="h-full w-full object-contain mix-blend-multiply"
                    loading="lazy"
                    src={product.image}
                    transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.045 }}
                  />
                </a>

                <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                  <div>
                    <p className="mb-2 text-[.78rem] text-[#9a948f]">{product.type}</p>
                    <a className="block font-[Manrope,sans-serif] text-[1.22rem] font-semibold tracking-[-.04em]" href={`/products/${product.slug}`}>
                      {product.name}
                    </a>
                    <strong className="mt-3 block font-[Manrope,sans-serif] text-[1.25rem] font-semibold tracking-[-.04em]">{product.price}</strong>
                  </div>
                  <a
                    aria-label={`View ${product.name} details`}
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fce7e4] text-[#241812] transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-[#f5cbc5]"
                    href={`/products/${product.slug}`}
                  >
                    <BagIcon size={19} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <a className="mx-auto mt-[clamp(2.5rem,5vw,4.5rem)] flex w-fit items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]" href="/collections">
          Explore our collection
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
};

export default FeaturedCollection;
