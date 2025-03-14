import React, { useState } from "react";
import scss from "./Coment.module.scss";
import styled from "styled-components";
import { useData } from "../../../../context/TravelContext";
import { Link } from "react-router-dom";

const initialValue = {
  rate: 0,
  message: "",
};
const Coment = () => {
  const { addProduct } = useData();
  const [res, setRes] = useState(initialValue);

  function givStar(e) {
    let obj = { ...res, [e.target.name]: e.target.value };
    setRes(obj);
  }
  function resStar() {
    if (!res.message || !res.rate) {
      alert("zapolny pole");
      return;
    }
    addProduct(res);
    setRes(initialValue);
  }
  return (
    <section id={scss.coment}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <h2>Оцените вашу поездку!</h2>
            <StyledWrapper>
              <div className="rating">
                <input
                  defaultValue={5}
                  onChange={(e) => givStar(e)}
                  name="rate"
                  id="star5"
                  type="radio"
                />
                <label title="text" htmlFor="star5" />
                <input
                  defaultValue={4}
                  onChange={(e) => givStar(e)}
                  name="rate"
                  id="star4"
                  type="radio"
                />
                <label title="text" htmlFor="star4" />
                <input
                  defaultValue={3}
                  onChange={(e) => givStar(e)}
                  name="rate"
                  id="star3"
                  type="radio"
                />
                <label title="text" htmlFor="star3" />
                <input
                  defaultValue={2}
                  onChange={(e) => givStar(e)}
                  name="rate"
                  id="star2"
                  type="radio"
                />
                <label title="text" htmlFor="star2" />
                <input
                  defaultValue={1}
                  onChange={(e) => givStar(e)}
                  name="rate"
                  id="star1"
                  type="radio"
                />
                <label title="text" htmlFor="star1" />
              </div>
            </StyledWrapper>
            <input onChange={(e) => givStar(e)} name="message" type="text" />
            <Link to="/feed">
              <button onClick={resStar}>send</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
const StyledWrapper = styled.div`
  .rating:not(:checked) > input {
    position: absolute;
    appearance: none;
  }

  .rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    color: #666;
  }

  .rating:not(:checked) > label:before {
    content: "★";
  }

  .rating > input:checked + label:hover,
  .rating > input:checked + label:hover ~ label,
  .rating > input:checked ~ label:hover,
  .rating > input:checked ~ label:hover ~ label,
  .rating > label:hover ~ input:checked ~ label {
    color: #e58e09;
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    color: #ff9e0b;
  }

  .rating > input:checked ~ label {
    color: #ffa723;
  }
`;

export default Coment;
