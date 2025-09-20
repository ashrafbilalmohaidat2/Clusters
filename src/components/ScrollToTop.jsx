import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.scrollTo) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // يخليها تنزل بسلاسة
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
