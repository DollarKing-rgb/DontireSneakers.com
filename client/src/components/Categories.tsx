import { ArrowIcon } from "../layouts/StorefrontLayout";
import { motion, useReducedMotion } from "framer-motion";

const shoeCategories = [
  {
    name: "Sneakers",
    detail: "Everyday icons",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Official shoes",
    detail: "Polished essentials",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Boots",
    detail: "Built for more",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Sandals",
    detail: "Easy-going pairs",
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Sports shoes",
    detail: "Move with purpose",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    name: "Kids",
    detail: "Small steps, big style",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1000&q=90",
  },
];

const Categories = () => {
      const shouldReduceMotion = useReducedMotion();
  return (
    <section
      className="overflow-hidden bg-[#f3eee9] py-[clamp(4rem,6vw,1rem)] pb-[clamp(5.6rem,10vw,9rem)] text-[#241812]"
      id="categories"
    >
      <div className="mx-auto mb-[clamp(2.2rem,4vw,3.8rem)] flex max-w-[112rem] items-end justify-between px-[clamp(1.35rem,5vw,5.6rem)] max-md:grid max-md:items-start max-md:gap-[1.6rem]">
        <div>
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#9b7962]">
            Shop by category
          </p>
          <h2 className="m-0 font-[Manrope,sans-serif] text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[.95] tracking-[-.07em]">
            Find your next pair.
          </h2>
        </div>
        <a
          className="inline-flex items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]"
          href="/collections"
        >
          View all collections
          <ArrowIcon />
        </a>
      </div>

      <div className="mx-auto max-w-[112rem] overflow-hidden px-[clamp(1.35rem,5vw,5.6rem)]">
        <motion.div
          aria-label="Shoe categories"
          className="flex w-max will-change-transform"
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          role="list"
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 42, ease: "linear", repeat: Infinity }
          }
        >
          {[0, 1].map((groupIndex) => (
            <div
              aria-hidden={groupIndex === 1}
              className="flex shrink-0 gap-4 pr-4"
              key={`category-group-${groupIndex}`}
            >
              {shoeCategories.map((category) => (
                <motion.a
                  className="group relative block h-[clamp(24rem,38vw,35rem)] w-[clamp(15.5rem,24vw,21.5rem)] shrink-0 overflow-hidden rounded-[1.05rem] text-white [isolation:isolate] max-md:h-[23rem] max-md:w-[15rem]"
                  href={`/collections?category=${encodeURIComponent(category.name)}`}
                  key={`${groupIndex}-${category.name}`}
                  role="listitem"
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                    loading="lazy"
                    src={category.image}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-gradient-to-t from-[#17100d]/95 via-[#17100d]/55 to-transparent"
                  />
                  <span className="absolute bottom-0 left-0 right-0 z-20 grid gap-2 px-6 pb-6 pt-24 text-white">
                    <span className="text-[.67rem] font-semibold uppercase tracking-[.15em] text-white">
                      {category.detail}
                    </span>
                    <strong className="font-[Manrope,sans-serif] text-[clamp(1.55rem,2.6vw,2.2rem)] font-medium leading-none tracking-[-.055em]">
                      {category.name}
                    </strong>
                    <span className="mt-2 inline-flex w-fit items-center gap-2 text-[.77rem] font-bold text-white">
                      Shop now
                      <ArrowIcon size={16} />
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Categories
