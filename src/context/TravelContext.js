import React, { сhildren, createContext, useContext } from "react";
const travelContext = createContext();
export const useProduct = () => useContext(travelContext);
const TravelContext = ({ children }) => {
  const values = {};

  return (
    <travelContext.Provider value={values}>{children}</travelContext.Provider>
  );
};

export default TravelContext;
