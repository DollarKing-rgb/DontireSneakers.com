import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon, BrandMark } from "../layouts/StorefrontLayout";
import featuredShoe from "../assets/why-shop-sneaker.png";

const shoppingSteps = [
  {
    number: "01",
    title: "Find your fit",
    description: "Browse by style, compare prices in KSh and check the size information on each pair.",
  },
  {
    number: "02",
    title: "Confirm the details",
    description: "Check availability, the final price and your delivery or pickup option before you pay.",
  },
  {
    number: "03",
    title: "Pay with M-PESA",
    description: "Use the payment details confirmed for your order and keep your confirmation for reference.",
  },
  {
    number: "04",
    title: "Get your pair",
    description: "Receive your delivery or collect from the confirmed pickup point at the agreed time.",
  },
];

function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#f3eee9] pb-20 text-[#241812]">
      <header className="mx-auto grid max-w-[112rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-[clamp(1.35rem,5vw,5.6rem)] py-6">
        <a aria-label="Back to Dontire Sneakers home" className="inline-flex items-center gap-2 justify-self-start text-[.72rem] font-bold uppercase tracking-[.1em] text-[#866752]" href="/">
          <span aria-hidden="true" className="text-[1.1rem] font-normal leading-none">←</span>
          <span className="max-[520px]:sr-only">Back to home</span>
        </a>
        <a aria-label="Dontire Sneakers home" className="inline-flex items-center gap-2 font-[Manrope,sans-serif] text-[.9rem] font-bold tracking-[.2em]" href="/">
          <BrandMark size={28} />
          <span>DONTIRE</span>
        </a>
        <span className="justify-self-end text-[.72rem] font-bold uppercase tracking-[.1em] text-[#866752] max-[520px]:sr-only">Our story</span>
      </header>

      <section className="mx-auto grid max-w-[112rem] items-center gap-[clamp(2.5rem,6vw,7rem)] px-[clamp(1.35rem,5vw,5.6rem)] pb-[clamp(5rem,9vw,8rem)] pt-[clamp(3rem,7vw,6.5rem)] min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          transition={{ duration: 0.6 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">About Dontire</p>
          <h1 className="m-0 max-w-[43rem] font-[Manrope,sans-serif] text-[clamp(3.4rem,6.3vw,7rem)] font-medium leading-[.91] tracking-[-.085em]">
            More than finding a good pair.
          </h1>
          <p className="mt-8 max-w-[34rem] text-[clamp(1rem,1.3vw,1.13rem)] leading-[1.75] text-[#765e52]">
            Dontire brings together shoes for workdays, everyday wear and active plans. We want the shopping part to feel just as considered: clear choices, helpful size information and a straightforward way to receive your order.
          </p>
          <a className="mt-9 inline-flex items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.8rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]" href="/collections">
            Explore the collection
            <ArrowIcon />
          </a>
        </motion.div>

        <motion.div
          className="relative flex aspect-[1.08] items-center justify-center overflow-hidden rounded-[2rem] border border-[#b48069]/15 bg-[#e9d9ce]"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,#faf0e8_0%,#ead8cb_58%,#d4b19d_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-[10%] bottom-[13%] h-[12%] rounded-[100%] bg-[#603e31]/12 blur-2xl" />
          <img alt="Unbranded brown sneaker representing Dontire's footwear collection" className="relative z-10 w-[112%] max-w-none object-contain drop-shadow-[0_22px_22px_rgba(54,30,22,.18)]" src={featuredShoe} />
          <span className="absolute bottom-5 left-5 z-20 rounded-full border border-white/60 bg-[#f8f1ed]/85 px-4 py-2 text-[.68rem] font-bold uppercase tracking-[.15em] text-[#6b493b] backdrop-blur-sm">
            Find your next move
          </span>
        </motion.div>
      </section>

      <section className="bg-[#fbf4f2] py-[clamp(5rem,9vw,8rem)]">
        <div className="mx-auto max-w-[112rem] px-[clamp(1.35rem,5vw,5.6rem)]">
          <div className="mb-[clamp(2.5rem,5vw,4.5rem)] grid gap-6 min-[900px]:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">How we work</p>
              <h2 className="m-0 max-w-[34rem] font-[Manrope,sans-serif] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[.94] tracking-[-.075em]">From first look to first step.</h2>
            </div>
            <p className="max-w-[31rem] self-end text-[1rem] leading-[1.75] text-[#765e52]">
              The important details are worth settling early. Here is the simple path from choosing a style to receiving your pair.
            </p>
          </div>
          <div className="grid gap-4 min-[700px]:grid-cols-2 min-[1180px]:grid-cols-4">
            {shoppingSteps.map((step) => (
              <article className="flex min-h-[17rem] flex-col rounded-[1.3rem] border border-[#6d4233]/12 bg-white/55 p-6" key={step.number}>
                <span className="text-[.72rem] font-bold tracking-[.18em] text-[#a85c48]">{step.number}</span>
                <div className="mt-auto">
                  <h3 className="font-[Manrope,sans-serif] text-[1.25rem] font-semibold tracking-[-.04em]">{step.title}</h3>
                  <p className="mt-3 text-[.9rem] leading-[1.65] text-[#765e52]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[112rem] gap-[clamp(1.5rem,4vw,4rem)] px-[clamp(1.35rem,5vw,5.6rem)] py-[clamp(5rem,9vw,8rem)] min-[850px]:grid-cols-2">
        <article className="border-t border-[#241812]/20 pt-6">
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">Fit and exchanges</p>
          <h2 className="max-w-[29rem] font-[Manrope,sans-serif] text-[clamp(2rem,3.5vw,3.6rem)] font-medium leading-[1] tracking-[-.065em]">A fit you can feel good about.</h2>
          <p className="mt-5 max-w-[31rem] leading-[1.7] text-[#765e52]">
            Check the listed size before ordering. If the fit is not right, contact the team with your order details and the size you need before returning the pair. Exchange availability and instructions are confirmed with you.
          </p>
        </article>
        <article className="border-t border-[#241812]/20 pt-6">
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">Delivery and collection</p>
          <h2 className="max-w-[29rem] font-[Manrope,sans-serif] text-[clamp(2rem,3.5vw,3.6rem)] font-medium leading-[1] tracking-[-.065em]">Know the plan before you go.</h2>
          <p className="mt-5 max-w-[31rem] leading-[1.7] text-[#765e52]">
            Confirm delivery coverage, cost and timing for your area, or request pickup details before travelling. Exact shop addresses and opening hours will appear here once the business confirms them.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-[112rem] px-[clamp(1.35rem,5vw,5.6rem)]">
        <div className="flex flex-col gap-8 rounded-[2rem] bg-[#261b15] px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vw,5rem)] text-[#f8f1ed] min-[780px]:flex-row min-[780px]:items-end min-[780px]:justify-between">
          <div>
            <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#d9a995]">Your next pair starts here</p>
            <h2 className="m-0 max-w-[40rem] font-[Manrope,sans-serif] text-[clamp(2.6rem,4vw,4.8rem)] font-medium leading-[.96] tracking-[-.07em]">Find the style that moves with you.</h2>
          </div>
          <a className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full border border-white/35 py-2 pl-2 pr-7 text-[.83rem] font-bold transition-[background-color,color] duration-300 hover:bg-white hover:text-[#241812]" href="/collections">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f1ed] text-[#241812] transition-colors duration-300 group-hover:bg-[#241812] group-hover:text-white"><ArrowIcon size={18} /></span>
            Shop collections
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
