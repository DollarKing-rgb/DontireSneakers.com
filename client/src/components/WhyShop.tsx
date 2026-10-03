import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "../layouts/StorefrontLayout";
import featuredShoe from "../assets/why-shop-sneaker.png";

type BenefitKind = "payment" | "delivery" | "pickup" | "size";

const benefits: {
  kind: BenefitKind;
  title: string;
  description: string;
}[] = [
  {
    kind: "payment",
    title: "Pay with M-PESA",
    description:
      "A familiar way to pay, with payment details confirmed as part of your order.",
  },
  {
    kind: "delivery",
    title: "Delivery that fits",
    description:
      "Confirm the available delivery option, cost and timing for your area.",
  },
  {
    kind: "pickup",
    title: "Collect your way",
    description:
      "Ask about an available pickup point and get the details before you travel.",
  },
  {
    kind: "size",
    title: "Fit comes first",
    description:
      "Check your size before ordering and ask about the exchange steps if the fit is off.",
  },
];

function BenefitIcon({ kind }: { kind: BenefitKind }) {
  if (kind === "payment") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect
          height="18"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          width="12"
          x="6"
          y="3"
        />
        <path
          d="M9 8h6m-6 3h4m-2 5h2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (kind === "delivery") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M2.5 6.5h11v9h-11zM13.5 10h3.2l4 3.5v2h-7.2z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle
          cx="6.5"
          cy="17"
          r="1.7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="17.5"
          cy="17"
          r="1.7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (kind === "pickup") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M12 21s6-5.1 6-10.8a6 6 0 1 0-12 0C6 15.9 12 21 12 21Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M4 7h16M4 12h12M4 17h16M7 5v4m5 1v4m5 1v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const WhyShop = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="overflow-hidden bg-[#f3eee9] py-[clamp(4rem,9vw,8rem)] text-[#241812]"
      id="why-shop"
    >
      <div className="mx-auto max-w-[112rem] px-[clamp(1.35rem,5vw,5.6rem)]">
        <motion.div
          className="mx-auto max-w-[54rem] text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          viewport={{ amount: 0.25, once: true }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">
            The Dontire difference
          </p>
          <h2 className="m-0 font-[Manrope,sans-serif] text-[clamp(2.8rem,5.8vw,6rem)] font-medium leading-[.94] tracking-[-.08em]">
            Good shoes. A better way to shop.
          </h2>
          <p className="mx-auto mt-6 max-w-[37rem] text-[clamp(.95rem,1.3vw,1.08rem)] leading-[1.7] text-[#765e52]">
            From choosing the right size to getting your pair, every step should
            feel clear and convenient.
          </p>
        </motion.div>

        <div className="mt-[clamp(3rem,7vw,6rem)] grid items-center gap-8 min-[960px]:grid-cols-[minmax(0,1fr)_minmax(20rem,1.65fr)_minmax(0,1fr)] min-[960px]:gap-[clamp(1.5rem,3vw,4rem)]">
          <div className="order-2 grid gap-2 min-[520px]:grid-cols-2 min-[960px]:order-1 min-[960px]:grid-cols-1">
            {benefits.slice(0, 2).map((benefit, index) => (
              <motion.article
                className="p-4 min-[640px]:p-6 min-[960px]:text-right"
                initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                key={benefit.title}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ amount: 0.25, once: true }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                }
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e9d6cc] text-[#9f4d3c]">
                  <BenefitIcon kind={benefit.kind} />
                </span>
                <h3 className="mt-5 font-[Manrope,sans-serif] text-[1.12rem] font-semibold tracking-[-.04em]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[.9rem] leading-[1.65] text-[#765e52]">
                  {benefit.description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="relative order-1 mx-auto flex aspect-[1.3] w-full max-w-[42rem] items-center justify-center overflow-hidden min-[960px]:aspect-[1.18]"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
            }
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-[10%] bottom-[13%] h-[12%] rounded-[100%] bg-[#603e31]/12"
            />
            <motion.img
              alt="Unbranded brown sneaker illustrating the Dontire shopping experience"
              className="relative z-10 w-[112%] max-w-none object-contain drop-shadow-[0_22px_22px_rgba(54,30,22,.18)]"
              loading="lazy"
              src={featuredShoe}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              whileHover={
                shouldReduceMotion ? undefined : { rotate: -2, scale: 1.035 }
              }
            />
            <span className="absolute bottom-4 left-4 z-20 rounded-full border border-[#6b493b]/30 bg-[#f8f1ed]/85 px-3 py-2 text-[.62rem] font-bold uppercase tracking-[.13em] text-[#6b493b] backdrop-blur-sm min-[640px]:bottom-5 min-[640px]:left-5 min-[640px]:px-4 min-[640px]:text-[.68rem]">
              Every step matters
            </span>
          </motion.div>

          <div className="order-3 grid gap-2 min-[520px]:grid-cols-2 min-[960px]:grid-cols-1">
            {benefits.slice(2).map((benefit, index) => (
              <motion.article
                className="p-4 min-[640px]:p-6"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                key={benefit.title}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ amount: 0.25, once: true }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                }
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e9d6cc] text-[#9f4d3c]">
                  <BenefitIcon kind={benefit.kind} />
                </span>
                <h3 className="mt-5 font-[Manrope,sans-serif] text-[1.12rem] font-semibold tracking-[-.04em]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[.9rem] leading-[1.65] text-[#765e52]">
                  {benefit.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(3.5rem,6vw,5rem)] flex justify-center">
          <a
            className="group inline-flex items-center gap-4 rounded-full border border-[#241812]/30 py-2 pl-2 pr-7 text-[.83rem] font-bold transition-[background-color,color,border-color] duration-300 hover:border-[#241812] hover:bg-[#241812] hover:text-white"
            href="/about"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#241812] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#241812]">
              <ArrowIcon size={18} />
            </span>
            Discover more
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyShop;
