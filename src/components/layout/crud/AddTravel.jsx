import scss from "./AddTravel.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../../context/TravelContext";
import { useState } from "react";
const initialValues = {
  image: "",
  person: "",
  price: "",
  location: "",
  time:'',
  conditions: "",
};
const AddTravel = () => {
  const { addTravel } = useData();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(initialValues);

  function handleInp(e) {
    if (e.target.name === "price") {
      let newProduct = {
        ...inputValue,
        [e.target.name]: Number(e.target.value),
      };
      setInputValue(newProduct);
    } else {
      let newProduct = {
        ...inputValue,
        [e.target.name]: e.target.value,
      };
      setInputValue(newProduct);
    }
  }

  function handleSubmit() {
    addTravel(inputValue);
    setInputValue(initialValues);
  }

  return (
    <div id={scss.AddTravel}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blocks}>
            <div className={scss.block}>
              <input
                onChange={(e) => handleInp(e)}
                type="text"
                placeholder="image"
                name="image"
              />
              <input
                onChange={(e) => handleInp(e)}
                type="text"
                placeholder="person"
                name="person"
              />
              <input
                onChange={(e) => handleInp(e)}
                type="text"
                placeholder="price"
                name="price"
              />
              <input
                onChange={(e) => handleInp(e)}
                type="text"
                placeholder="location"
                name="location"
              />
              <input
                onChange={(e) => handleInp(e)}
                type="text"
                placeholder="time"
                name="time"
              />
               <input
                onChange={(e) => handleInp(e)}
                type="text"
                placeholder="condition"
                name="condition"
              />
              {/* <Link to="/"> */}
                <button onClick={handleSubmit}>create</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTravel;
