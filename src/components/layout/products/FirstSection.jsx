import React from "react";
import scss from "./FirstSection.module.scss";
import Pages from "./pagination/Pages";

const FirstSection = () => {
  return (
    <section id={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.partTwo}>
            <div className={scss.two_left}>
              <h1>Твой выходной!</h1>
              <Pages />
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
