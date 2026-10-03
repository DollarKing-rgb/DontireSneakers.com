import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "../data/socialLinks";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24">
      <path
        d="M20.5 11.8a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1.2-4.6a8.5 8.5 0 1 1 15.8-4.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8.5 8.3c-.4.2-.8.9-.8 1.4 0 1.8 2.6 4.8 4.6 5.9 1 .5 2.1.7 2.8.2l1-.9-2.4-1.2-.9.9c-1.5-.6-2.7-1.7-3.4-3.2l.8-.9-1.2-2.3-.5.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function FloatingActions({ pathname }: { pathname: string }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      const categories = document.getElementById("categories");
      setShowBackToTop(
        categories
          ? categories.getBoundingClientRect().bottom <= 0
          : window.scrollY > window.innerHeight,
      );
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname]);

  const whatsappClassName =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6f6df]/30 bg-[#1a9d51] text-white shadow-[0_12px_30px_rgba(18,73,37,.24)] min-[640px]:h-14 min-[640px]:w-14";

  return (
    <div
      className="fixed z-50 flex items-center gap-3"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
        right: "calc(1.25rem + env(safe-area-inset-right))",
      }}
    >
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-label="Back to top"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f8f1ed]/25 bg-[#241812] text-[#f8f1ed] shadow-[0_12px_30px_rgba(36,24,18,.25)] transition-colors hover:bg-[#493023] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a85c48] min-[640px]:h-14 min-[640px]:w-14"
            exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.85, y: 10 }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85, y: 10 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: shouldReduceMotion ? "instant" : "smooth",
              })
            }
            title="Back to top"
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            type="button"
          >
            <svg aria-hidden="true" fill="none" height="21" viewBox="0 0 24 24" width="21">
              <path
                d="M12 19V5m-6 6 6-6 6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
      {socialLinks.whatsapp ? (
        <a
          aria-label="Contact Dontire on WhatsApp"
          className={`${whatsappClassName} transition-colors hover:bg-[#158347] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a9d51]`}
          href={socialLinks.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon />
        </a>
      ) : (
        <span
          aria-label="WhatsApp contact link coming soon"
          className={`${whatsappClassName} cursor-default`}
          role="img"
          title="WhatsApp contact link coming soon"
        >
          <WhatsAppIcon />
        </span>
      )}
    </div>
  );
}

export default FloatingActions;
