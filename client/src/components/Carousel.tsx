import { Fragment, type ReactNode, useCallback, useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type CarouselRenderContext = {
  isPaused: boolean;
  motionIsEnabled: boolean;
};

export type CarouselProps<T> = {
  ariaLabel: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  children?: never;
  className?: string;
  controlsClassName?: string;
  id?: string;
  items: readonly T[];
  renderItem: (item: T, index: number, context: CarouselRenderContext) => ReactNode;
  scrollStep?: number;
  showControls?: boolean;
  showPauseControl?: boolean;
  viewportClassName?: string;
};

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : undefined}
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
      <path d="M8 6v12M16 6v12" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="m8 5 11 7-11 7V5Z" />
    </svg>
  );
}

function Carousel<T>({
  ariaLabel,
  autoPlay = false,
  autoPlayInterval = 4500,
  className = "",
  controlsClassName = "",
  id,
  items,
  renderItem,
  scrollStep = 0.82,
  showControls = true,
  showPauseControl = true,
  viewportClassName = "",
}: CarouselProps<T>) {
  const generatedId = useId().replace(/:/g, "");
  const viewportId = id ?? `carousel-${generatedId}`;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const motionIsEnabled = !shouldReduceMotion && !isPaused;

  const scrollBy = useCallback((direction: number) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollBy({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      left: direction * viewport.clientWidth * scrollStep,
    });
  }, [scrollStep, shouldReduceMotion]);

  useEffect(() => {
    if (!autoPlay || shouldReduceMotion || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => scrollBy(1), autoPlayInterval);

    return () => window.clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval, isPaused, scrollBy, shouldReduceMotion]);

  return (
    <div className={`relative ${className}`}>
      <div
        aria-label={ariaLabel}
        className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${viewportClassName}`}
        id={viewportId}
        ref={viewportRef}
        role="region"
        tabIndex={0}
      >
        {items.map((item, index) => (
          <Fragment key={index}>
            {renderItem(item, index, { isPaused, motionIsEnabled })}
          </Fragment>
        ))}
      </div>

      {(showControls || showPauseControl) && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`pointer-events-none absolute bottom-9 right-[clamp(1.35rem,5vw,5.6rem)] z-10 flex items-center gap-3 ${controlsClassName}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          transition={{ delay: 0.25, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {showPauseControl && (
            <button
              aria-label={isPaused ? "Resume carousel motion" : "Pause carousel motion"}
              className={`pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-sm transition-[background-color,border-color,transform] duration-200 hover:scale-105 ${isPaused ? "border-[#241812]/45 bg-[#f3eee9]/85 text-[#241812]" : "border-[#241812]/30 bg-[#f3eee9]/55 text-[#241812]"}`}
              onClick={() => setIsPaused((current) => !current)}
              title={isPaused ? "Resume carousel motion" : "Pause carousel motion"}
              type="button"
            >
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </button>
          )}
          {showControls && (
            <>
              <button
                aria-controls={viewportId}
                aria-label="Show previous carousel item"
                className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#17100d] text-white transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-[#33231b]"
                onClick={() => scrollBy(-1)}
                type="button"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                aria-controls={viewportId}
                aria-label="Show next carousel item"
                className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#17100d] text-white transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-[#33231b]"
                onClick={() => scrollBy(1)}
                type="button"
              >
                <ArrowIcon />
              </button>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default Carousel;
