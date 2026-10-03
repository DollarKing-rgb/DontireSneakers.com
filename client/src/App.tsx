import { useEffect, useState } from "react";
import "./App.css";
import CollectionsPage from "./pages/CollectionsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AboutPage from "./pages/AboutPage";
import StorefrontLayout from "./layouts/StorefrontLayout";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  let page = <StorefrontLayout />;

  if (pathname === "/collections") {
    page = <CollectionsPage />;
  } else if (pathname.startsWith("/products/")) {
    page = (
      <ProductDetailsPage
        slug={decodeURIComponent(pathname.slice("/products/".length))}
      />
    );
  } else if (pathname === "/about") {
    page = <AboutPage />;
  }

  return (
    <>
      <AnnouncementBar />
      {page}
      <Footer />
      <FloatingActions pathname={pathname} />
    </>
  );
}

export default App;
