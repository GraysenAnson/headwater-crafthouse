import React from "react";
import Classes from "../../styles/back-to-top.module.css";

export const BackToTop = () => (
  <div className={Classes["navigation-btn"]}>
    <a href="#">
      <img
        className="navigation-image"
        src="https://ps.w.org/scrollup-master/assets/icon-256x256.png?rev=1058878"
        alt="Return to top of page"
      ></img>
    </a>
  </div>
);
