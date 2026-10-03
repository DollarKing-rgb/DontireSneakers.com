import { useEffect, useState } from "react";
import "./App.css";
import CollectionsPage from "./pages/CollectionsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AboutPage from "./pages/AboutPage";
import StorefrontLayout from "./layouts/StorefrontLayout";

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (pathname === "/collections") {
    return <CollectionsPage />;
  }

  if (pathname.startsWith("/products/")) {
    return <ProductDetailsPage slug={decodeURIComponent(pathname.slice("/products/".length))} />;
  }

  if (pathname === "/about") {
    return <AboutPage />;
  }

  return (
    <StorefrontLayout />
  );
}

export default App;
