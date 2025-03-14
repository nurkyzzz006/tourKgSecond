import React, { useEffect } from "react";
import FirstSection from "./FirstSection";
import ListTravel from "../crud/ListTravel";
import Anima from "../../anima/Anima";
import { useData } from "../../../context/TravelContext";

const Home = () => {
  const { readTravel } = useData();

  return (
    <>
      <FirstSection />
      <ListTravel />
      <Anima />
    </>
  );
};

export default Home;
