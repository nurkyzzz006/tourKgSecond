import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import TravelRoutes from "../../routes/TravelRoutes";
import ListTravel from "./crud/ListTravel";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <TravelRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
