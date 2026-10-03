function AnnouncementBar() {
  return (
    <aside
      aria-label="Delivery announcement"
      className="bg-[#824735] text-[#fff9f5]"
    >
      <div className="mx-auto flex min-h-12 max-w-[112rem] items-center justify-center px-[clamp(1.35rem,5vw,5.6rem)] py-2 text-center min-[640px]:min-h-11">
        <p className="m-0 text-[.72rem] leading-[1.5] min-[640px]:text-[.8rem]">
          <strong className="font-bold tracking-[.01em]">
            Delivery to your doorstep.
          </strong>{" "}
          <span className="text-[#fff9f5]/85">
            Confirm your location and delivery fee before payment.
          </span>
        </p>
      </div>
    </aside>
  );
}

export default AnnouncementBar;
