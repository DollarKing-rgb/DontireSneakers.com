import { ArrowIcon, BrandMark } from "../layouts/StorefrontLayout";
import { socialLinks } from "../data/socialLinks";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About us", href: "/about" },
  { label: "Customer reviews", href: "/#customer-reviews" },
  { label: "FAQs", href: "/#faq" },
];

type SocialPlatform = "Facebook" | "Instagram" | "TikTok";

const socialProfiles: { name: SocialPlatform; href?: string }[] = [
  { name: "Facebook", href: socialLinks.facebook },
  { name: "Instagram", href: socialLinks.instagram },
  { name: "TikTok", href: socialLinks.tiktok },
];

function SocialIcon({ name }: { name: SocialPlatform }) {
  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
        <path d="M13.8 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.6v3.2h2.8V21h3.4Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
        <rect height="16" rx="4.5" stroke="currentColor" strokeWidth="1.8" width="16" x="4" y="4" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7.2" fill="currentColor" r="1" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path
        d="M14.5 3v10.4a4.2 4.2 0 1 1-4.2-4.2m4.2-6.2c.5 2.9 2.1 4.6 5 4.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f3eee9] px-[clamp(1.35rem,5vw,5.6rem)] pb-[clamp(1.35rem,5vw,5.6rem)] pt-[clamp(1.5rem,4vw,3rem)] text-[#f8f1ed]">
      <div className="relative mx-auto max-w-[112rem] overflow-hidden rounded-[clamp(1.5rem,4vw,3.5rem)] border border-[#775c4d]/25 bg-[radial-gradient(circle_at_100%_0%,#3b281f_0%,#1a130f_42%,#120e0c_100%)] px-[clamp(1.5rem,6vw,6.5rem)] py-[clamp(2.5rem,6vw,5.5rem)] shadow-[0_24px_60px_rgba(35,19,12,.12)]">
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 min-[700px]:flex-row min-[700px]:items-center">
          <a
            aria-label="Dontire Sneakers home"
            className="inline-flex items-center gap-3 font-[Manrope,sans-serif] text-[1rem] font-bold tracking-[.18em] transition-opacity hover:opacity-75 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ad91]"
            href="/"
          >
            <BrandMark size={34} />
            <span>DONTIRE</span>
          </a>
          <a
            className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-[#f8f1ed]/35 px-5 py-2.5 text-[.78rem] font-bold transition-[background-color,color,border-color] duration-200 hover:border-[#f8f1ed] hover:bg-[#f8f1ed] hover:text-[#241812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ad91]"
            href="/collections"
          >
            Explore collections
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <ArrowIcon size={16} />
            </span>
          </a>
        </div>

        <p className="relative z-10 mt-[clamp(2rem,5vw,4rem)] max-w-[43rem] font-[Manrope,sans-serif] text-[clamp(1.35rem,2.2vw,2.1rem)] font-medium leading-[1.4] tracking-[-.04em] text-[#f8f1ed]/90">
          Good shoes for every move. A clearer, easier way to find your next pair.
        </p>

        <nav aria-label="Footer navigation" className="relative z-10 mt-[clamp(2.5rem,5vw,4.5rem)]">
          <ul className="m-0 flex list-none flex-wrap gap-x-[clamp(1.3rem,3vw,2.5rem)] gap-y-4 p-0">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="text-[.9rem] font-semibold text-[#f8f1ed]/80 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e0ad91]"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 mt-[clamp(3rem,6vw,5.5rem)] flex flex-col gap-4 border-t border-[#f8f1ed]/20 pt-6 text-[.75rem] text-[#f8f1ed]/55 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
          <p>© {new Date().getFullYear()} Dontire Sneakers. All rights reserved.</p>
          <div className="flex items-center gap-3 min-[640px]:justify-end">
            <span className="mr-1 font-semibold text-[#f8f1ed]/65">Connect with us</span>
            {socialProfiles.map(({ name, href }) =>
              href ? (
                <a
                  aria-label={`Visit Dontire on ${name}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f8f1ed]/30 text-[#f8f1ed] transition-[background-color,color] hover:bg-[#f8f1ed] hover:text-[#241812] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0ad91]"
                  href={href}
                  key={name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon name={name} />
                </a>
              ) : (
                <span
                  aria-label={`${name} profile link coming soon`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#f8f1ed]/20 text-[#f8f1ed]/55"
                  key={name}
                  role="img"
                  title={`${name} profile link coming soon`}
                >
                  <SocialIcon name={name} />
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
