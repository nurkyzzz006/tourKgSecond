import React from "react";
import FirstSection from "./FirstSection";
import ListTravel from "../crud/ListTravel";
import Anima from "../../anima/Anima";

const Home = () => {
  return (
    <>
      <FirstSection />
      <ListTravel />
      <Anima />
    </>
  );
};

export default Home;
