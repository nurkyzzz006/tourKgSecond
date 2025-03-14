import React from "react";
import { useData } from "../../../../context/TravelContext";
import scss from "./OneProduct.module.scss";
const OneProduct = () => {
  const { moreProd } = useData();
  console.log(moreProd);

  return (
    <>
      {moreProd.map((item) => (
        <div className={scss.cart} key={item._id}>
          <img src={item.image} alt="img" />
          <div className={scss.text}>
            <h2>{item.location}</h2>
            <p>price : {item.price}</p>
            <p>person : {item.person}</p>
            <p>{item.condition}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default OneProduct;
