import { useState } from "react";

import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import FeaturedCollection from "../components/FeaturedCollection";
import WhyShop from "../components/WhyShop";
import CustomerReviews from "../components/CustomerReviews";
import Faq from "../components/Faq";

type IconProps = {
  size?: number;
};

type HeartIconProps = IconProps & {
  filled?: boolean;
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
    description:
      "New silhouettes and timeless icons, selected for your rotation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=2400&q=90",
    eyebrow: "Built to last",
    title: "Find Your Pace.",
    titleLineTwo: "Go Further.",
    description:
      "Premium comfort and considered design for wherever life leads.",
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
      <path
        d="M14 16 23 5h5l-8 11 8 11h-5l-9-11Z"
        fill="currentColor"
        opacity=".66"
      />
    </svg>
  );
}

export function SearchIcon({ size = 25 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <circle
        cx="10.8"
        cy="10.8"
        r="6.7"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m16 16 5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function BagIcon({ size = 25 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M5.5 8.5h13l.8 12h-14l.7-12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M8.5 9V6.7a3.5 3.5 0 0 1 7 0V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function UserIcon({ size = 25 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <circle
        cx="12"
        cy="7.5"
        r="3.3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.8 20.2c.6-3.4 3.2-5.4 7.2-5.4s6.6 2 7.2 5.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function MenuIcon({ size = 25 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function CloseIcon({ size = 25 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function HeartIcon({ filled = false, size = 21 }: HeartIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path
        d="M20.8 8.8c0 5.4-8.8 10.2-8.8 10.2S3.2 14.2 3.2 8.8A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ArrowIcon({ size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
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

const StorefrontLayout = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
            <a className="nav-link active" href="#home">
              Home
            </a>
            <a className="nav-link" href="#products">
              Men
            </a>
            <a className="nav-link" href="#services">
              Women
            </a>
            <a className="nav-link" href="#services">
              Kids
            </a>
            <a className="nav-link" href="#services">
              Brands
            </a>
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
            <button
              aria-label="Open shopping bag"
              className="icon-button bag-button"
              type="button"
            >
              <BagIcon />
              <span className="bag-count">0</span>
            </button>
            <button
              aria-label="Open account"
              className="icon-button account-button"
              type="button"
            >
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
            <form
              className="search-panel"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="site-search">
                Search sneakers
              </label>
              <input
                autoFocus
                id="site-search"
                placeholder="Search sneakers"
                type="search"
              />
              <button aria-label="Submit search" type="submit">
                <ArrowIcon />
              </button>
            </form>
          )}
        </header>

        {isMenuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-nav">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
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

      <Categories />

      <BestSellers />
      <FeaturedCollection />
      <WhyShop />
      <CustomerReviews />
      <Faq />
    </main>
  );
};

export default StorefrontLayout;
