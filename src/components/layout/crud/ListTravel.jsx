import React, { useEffect } from "react";
import scss from "./ListTravel.module.scss";
import { useData } from "../../../context/TravelContext";

import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Pages from "../products/pagination/Pages";
const ListTravel = () => {
  const navigate = useNavigate();
  const { searchMas, deleteTravel, readTravel, data, getMoreProduct } =
    useData();

  useEffect(() => {
    readTravel();
  }, []);
  return (
    <div id={scss.ListTravel}>
      <div className="container">
        <div className={scss.hear}>
          <h1>TOURS</h1>
          <button>
            <input onChange={(e) => searchMas(e.target.value)} type="search" />
            <IoSearch className={scss.lupa} />
          </button>
        </div>
        <div className={scss.manip}>
          <div className={scss.filters}>
            <button>
              <li>Бишкек</li>
            </button>
            <button>
              <li>Чуй</li>
            </button>
            <button>
              <li>Нарын</li>
            </button>
            <button>
              <li>Талас</li>
            </button>
            <button>
              <li>Жалал-Абад</li>
            </button>
            <button>
              <li>Ош</li>
            </button>
            <button>
              <li>Ыссык-Кол</li>
            </button>
            <button>
              <li>Баткен</li>
            </button>
          </div>
        </div>
        <div className={scss.content}>
          {data.map((item) => (
            <div className={scss.cart} key={item._id}>
              <img src={item.image} alt="img" />
              <div className={scss.text}>
                <h2>{item.location}</h2>
                <p>price : {item.price}</p>
                <p>person : {item.person}</p>
              </div>
              <button
                onClick={() => navigate("/about", getMoreProduct(item._id))}
              >
                Learn More
              </button>
              <div className={scss.btns}>
                <button>edit</button>
                <button onClick={() => deleteTravel(item._id)}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    
    );
};

export default ListTravel;
