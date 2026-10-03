import { useState } from "react";

const dismissalKey = "dontire-delivery-announcement-dismissed";

function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return window.sessionStorage.getItem(dismissalKey) !== "1";
    } catch {
      return true;
    }
  });

  if (!isVisible) {
    return null;
  }

  const dismiss = () => {
    setIsVisible(false);
    try {
      window.sessionStorage.setItem(dismissalKey, "1");
    } catch {
      // The strip still closes when browser storage is unavailable.
    }
  };

  return (
    <aside
      aria-label="Delivery announcement"
      className="bg-[#824735] text-[#fff9f5]"
    >
      <div className="relative mx-auto flex min-h-12 max-w-[112rem] items-center justify-center px-[3.6rem] py-2 text-center min-[640px]:min-h-11">
        <p className="m-0 text-[.72rem] leading-[1.5] min-[640px]:text-[.8rem]">
          <strong className="font-bold tracking-[.01em]">
            Delivery to your doorstep.
          </strong>{" "}
          <span className="text-[#fff9f5]/85">
            Confirm your location and delivery fee before payment.
          </span>
        </p>
        <button
          aria-label="Dismiss delivery announcement"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-[#fff9f5] transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white min-[640px]:right-4"
          onClick={dismiss}
          type="button"
        >
          <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
            <path
              d="M5 5 19 19M19 5 5 19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}

export default AnnouncementBar;
