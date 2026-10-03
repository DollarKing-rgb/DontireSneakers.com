import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const questions = [
  {
    question: "How can I pay for my order?",
    answer:
      "M-PESA is available. Confirm your order total and the correct payment details with the team before sending money, then keep your transaction confirmation for reference.",
  },
  {
    question: "Which areas do you deliver to?",
    answer:
      "We handle delivery enquiries for Nairobi, Kiambu, Murang’a, Machakos and Narok. Share your exact location so the team can confirm availability, the delivery fee and the expected timing before you pay.",
  },
  {
    question: "How do I know what quality to expect?",
    answer:
      "Check the product photos, description and size details for the pair you want. If you need a closer look or more information about its materials or condition, ask the team to confirm those details before ordering.",
  },
  {
    question: "What if my shoes do not fit or I need to return them?",
    answer:
      "Contact the team with your order details before sending a pair back. They will confirm the applicable exchange or return terms, including eligibility, condition requirements and the next steps. Please check these terms before purchasing if fit is a concern.",
  },
  {
    question: "How are order issues or disputes handled?",
    answer:
      "Share your order details, M-PESA transaction reference if relevant, and clear photos of the issue with the team. They can review what happened and explain the available resolution and any return instructions before you send anything back.",
  },
  {
    question: "Can I collect my order instead of having it delivered?",
    answer:
      "Ask the team whether pickup is available for your order. They will confirm the collection point and time before you travel.",
  },
  {
    question: "Are there offers or coupon codes?",
    answer:
      "Coupons are coming soon, but no active code is listed here yet. When an offer is available, check its eligibility, expiry date and any exclusions before placing an order.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#f8f1ed] py-[clamp(4.5rem,9vw,8rem)] text-[#241812]"
      id="faq"
    >
      <div className="mx-auto grid max-w-[112rem] gap-[clamp(2.5rem,6vw,7rem)] px-[clamp(1.35rem,5vw,5.6rem)] min-[900px]:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
        <div className="min-w-0">
          <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a85c48]">
            Good to know
          </p>
          <h2
            className="m-0 max-w-[37rem] font-[Manrope,sans-serif] text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[.96] tracking-[-.075em]"
            id="faq-heading"
          >
            Questions, answered.
          </h2>
          <p className="mt-6 max-w-[34rem] text-[clamp(.95rem,1.25vw,1.08rem)] leading-[1.75] text-[#765e52]">
            The essentials before you choose your pair: payment, delivery, fit
            and what to do if something needs sorting out.
          </p>
          <div className="mt-10 hidden max-w-[24rem] border-t border-[#241812]/20 pt-5 text-[.78rem] leading-[1.65] text-[#866752] min-[900px]:block">
            Have a question about a particular order? Confirm the details
            directly with the team before paying.
          </div>
        </div>

        <div className="min-w-0 border-t border-[#241812]/20">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index + 1}`;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <div className="border-b border-[#241812]/20" key={question}>
                <h3 className="m-0">
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start gap-4 py-5 text-left focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a85c48] min-[640px]:gap-6 min-[640px]:py-7"
                    id={questionId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    type="button"
                  >
                    <span className="mt-1 shrink-0 text-[.7rem] font-bold tracking-[.12em] text-[#a85c48]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 font-[Manrope,sans-serif] text-[clamp(1.05rem,1.5vw,1.35rem)] font-semibold leading-[1.4] tracking-[-.035em] transition-colors group-hover:text-[#a85c48]">
                      {question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#241812]/25 text-[1.35rem] font-light leading-none min-[640px]:h-9 min-[640px]:w-9"
                      transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
                    >
                      +
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      key={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
                    >
                      <p className="max-w-[40rem] pb-6 pl-[2.15rem] pr-10 text-[.94rem] leading-[1.75] text-[#765e52] min-[640px]:pb-7 min-[640px]:pl-[2.65rem]">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
