import React from "react";
import scss from "./FirstSection.module.scss";
import { IoSearch } from "react-icons/io5";

const FirstSection = () => {
  return (
    <section id={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.partTwo}>
            <div className={scss.two_left}>
              <h1>Твой выходной!</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                doloremque assumenda corporis deserunt commodi expedita
                cupiditate hic minima recusandae nobis voluptatum, qui ducimus,
                placeat sapiente corrupti dolore sunt fugiat possimus
                praesentium ad consequuntur quasi harum debitis! Dolorem eveniet
                aliquid temporibus culpa asperiores, obcaecati odit magnam
                molestias adipisci labore voluptates saepe.
              </p>
              <div className={scss.search}>
                <h3>ИСКАТЬ?</h3>
                <div className={scss.btn_filters}>
                  <button>
                    <li>Озера</li>
                  </button>
                  <button>
                    <li>Горы</li>
                  </button>
                  <button>
                    <li>Чуй</li>
                  </button>
                </div>
                <button>
                  <input type="search" />
                  <IoSearch className={scss.lupa} />
                </button>
              </div>
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
