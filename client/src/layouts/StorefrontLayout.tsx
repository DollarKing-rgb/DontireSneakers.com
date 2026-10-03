import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type IconProps = {
  size?: number;
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "The everyday edit",
    title: "Move With Intent.",
    titleLineTwo: "Own The Moment.",
    description: "Curated sneakers for every version of the way you move.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Fresh arrivals",
    title: "Make An Entrance.",
    titleLineTwo: "Leave A Mark.",
    description: "New silhouettes and timeless icons, selected for your rotation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Built to last",
    title: "Find Your Pace.",
    titleLineTwo: "Go Further.",
    description: "Premium comfort and considered design for wherever life leads.",
  },
];

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

export function BrandMark({ size = 32 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      height={size}
      viewBox="0 0 32 32"
      width={size}
    >
      <path d="M4 16 13 5h7l-8 11 8 11h-7L4 16Z" fill="currentColor" />
      <path d="M14 16 23 5h5l-8 11 8 11h-5l-9-11Z" fill="currentColor" opacity=".66" />
    </svg>
  );
}

function SearchIcon({ size = 25 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <circle cx="10.8" cy="10.8" r="6.7" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16 16 5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function BagIcon({ size = 25 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M5.5 8.5h13l.8 12h-14l.7-12Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      <path d="M8.5 9V6.7a3.5 3.5 0 0 1 7 0V9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function UserIcon({ size = 25 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <circle cx="12" cy="7.5" r="3.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.8 20.2c.6-3.4 3.2-5.4 7.2-5.4s6.6 2 7.2 5.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function MenuIcon({ size = 25 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function CloseIcon({ size = 25 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

export function ArrowIcon({ size = 18 }: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

const StorefrontLayout = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const activeContent = slides[activeSlide];

  return (
    <main className="storefront-shell">
      <section className="hero" id="home">
        <div
          aria-hidden="true"
          className="hero-media"
          style={{ backgroundImage: `url(${activeContent.image})` }}
        />
        <div aria-hidden="true" className="hero-overlay" />

        <header className="site-header">
          <a aria-label="Dontire Sneakers home" className="brand" href="#home">
            <BrandMark />
            <span>DONTIRE</span>
          </a>

          <nav aria-label="Primary navigation" className="desktop-nav">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#products">Men</a>
            <a className="nav-link" href="#services">Women</a>
         <a className="nav-link" href="#services">Kids</a>
         <a className="nav-link" href="#services">Brands</a>

          </nav>

          <div className="header-actions">
            <button
              aria-expanded={isSearchOpen}
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              className="icon-button"
              onClick={() => setIsSearchOpen((current) => !current)}
              type="button"
            >
              {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>
            <button aria-label="Open shopping bag" className="icon-button bag-button" type="button">
              <BagIcon />
              <span className="bag-count">0</span>
            </button>
            <button aria-label="Open account" className="icon-button account-button" type="button">
              <UserIcon />
            </button>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="icon-button menu-button"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {isSearchOpen && (
            <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="site-search">Search sneakers</label>
              <input autoFocus id="site-search" placeholder="Search sneakers" type="search" />
              <button aria-label="Submit search" type="submit"><ArrowIcon /></button>
            </form>
          )}
        </header>

        {isMenuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-nav">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          </nav>
        )}

        <div className="hero-content">
          <p className="hero-eyebrow">{activeContent.eyebrow}</p>
          <h1>
            {activeContent.title}
            <br />
            {activeContent.titleLineTwo}
          </h1>
          <p className="hero-description">{activeContent.description}</p>
          <a className="primary-button" href="#categories">
            Shop the collection
            <ArrowIcon />
          </a>
        </div>

        <div aria-label="Hero slides" className="slide-controls" role="group">
          {slides.map((slide, index) => (
            <button
              aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
              className={`slide-button ${index === activeSlide ? "selected" : ""}`}
              key={slide.eyebrow}
              onClick={() => setActiveSlide(index)}
              type="button"
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div aria-hidden="true" className="scroll-note">
          <span />
          Scroll to explore
        </div>
      </section>

      <section
        className="overflow-hidden bg-[#f3eee9] py-[clamp(4.8rem,9vw,8rem)] pb-[clamp(5.6rem,10vw,9rem)] text-[#241812]"
        id="categories"
      >
        <div className="mx-auto mb-[clamp(2.2rem,4vw,3.8rem)] flex max-w-[112rem] items-end justify-between px-[clamp(1.35rem,5vw,5.6rem)] max-md:grid max-md:items-start max-md:gap-[1.6rem]">
          <div>
            <p className="mb-4 text-[.72rem] font-bold uppercase tracking-[.18em] text-[#9b7962]">Shop by category</p>
            <h2 className="m-0 font-[Manrope,sans-serif] text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[.95] tracking-[-.07em]">Find your next pair.</h2>
          </div>
          <a
            className="inline-flex items-center gap-3 border-b border-[#241812]/35 pb-2 text-[.78rem] font-bold transition-[border-color,gap] duration-200 hover:gap-4 hover:border-[#241812]"
            href="/collections"
          >
            View all collections
            <ArrowIcon />
          </a>
        </div>

        <div className="overflow-hidden">
          <motion.div
            aria-label="Shoe categories"
            className="flex w-max will-change-transform"
            animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
            role="list"
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 42, ease: "linear", repeat: Infinity }}
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
                    <span className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0906]/[.03] via-transparent to-[#0e0906]/80" />
                    <span className="absolute bottom-0 left-0 right-0 z-20 grid gap-2 bg-gradient-to-b from-[#17100d]/35 via-[#17100d]/75 to-[#17100d]/95 px-6 pb-6 pt-5 text-white">
                      <span className="text-[.67rem] font-semibold uppercase tracking-[.15em] text-white">{category.detail}</span>
                      <strong className="font-[Manrope,sans-serif] text-[clamp(1.55rem,2.6vw,2.2rem)] font-medium leading-none tracking-[-.055em]">{category.name}</strong>
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

      <section className="placeholder-section darker" id="services">
        <p>For growing sneaker businesses</p>
        <h2>Built to move your store forward.</h2>
      </section>
    </main>
  );
};

export default StorefrontLayout;
