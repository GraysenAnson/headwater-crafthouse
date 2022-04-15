import React from "react";
import "../../styles/back-to-top.css";

export const BackToTop = () => (
  <div className="navigation-btn">
    <a href="#top">
      <img
        className="navigation-image"
        src="https://ps.w.org/scrollup-master/assets/icon-256x256.png?rev=1058878"
        alt="Return to top of page"
      ></img>
    </a>
  </div>
);
