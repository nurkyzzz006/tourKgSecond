import React from "react";
import scss from "./FirstSection.module.scss";

const FirstSection = () => {
  return (
    <section id={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.partTwo}>
            <div className={scss.two_left}>
              <h1>Твой выходной!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
                doloremque et adipisci pariatur quos, maiores necessitatibus
                perferendis asperiores voluptatem exercitationem obcaecati unde
                delectus minus error cumque. Minus aliquid ullam totam vel
                reprehenderit. Non ea est ab mollitia dolor, explicabo magni
                reprehenderit in asperiores eos repellat facilis ipsam quaerat!
                Earum.
              </p>
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
