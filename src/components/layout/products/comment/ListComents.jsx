import React, { useEffect } from "react";
import styled from "styled-components";
import scss from "./ListComent.module.scss";
import { FaPen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../../context/TravelContext";
import { MdDelete } from "react-icons/md";

const ListComents = () => {
  const { data, searchTravel, readProduct, deleteProduct } = useData();
  const navigate = useNavigate();
  useEffect(() => {
    readProduct();
  }, []);

  const renderStars = (rate) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => {
      const starNumber = index + 1; // Order: 1, 2, 3, 4, 5
      return (
        <span
          key={index}
          className={starNumber <= rate ? "star filled" : "star"}
        >
          ★
        </span>
      );
    });
  };

  return (
    <div div className={scss.otzyv}>
      <div className={scss.blocks}>
        <input
          className={scss.search}
          type="search"
          onChange={(e) => searchTravel(e.target.value)}
          placeholder="Search"
        />
        <div className={scss.block}>
          {data.length > 0 ? (
            data.map((item) => (
              <div className={scss.box} key={item._id}>
                <div className={scss.card}>
                  <StyledWrapper>
                    <div className={scss.text}>
                      <div className="rating">{renderStars(item.rate)}</div>
                      <p>{item.message}</p>
                    </div>
                  </StyledWrapper>
                  <div className={scss.btn}>
                    <button onClick={() => navigate(`/edit/${item._id}`)}>
                      <FaPen />
                    </button>
                    <button
                     
                      onClick={() => deleteProduct(item._id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .rating {
    display: flex;
    flex-direction: row; /* Left to right */
  }

  .star {
    font-size: 30px;
    color: #666; /* Gray for unfilled stars */
  }

  .star.filled {
    color: rgb(101, 164, 85); /* Yellow for filled stars */
  }
`;

export default ListComents;
