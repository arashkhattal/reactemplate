import React from "react";
import "./muiIcons.css";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scroll-to-top-btn" onClick={handleScrollToTop}>
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
