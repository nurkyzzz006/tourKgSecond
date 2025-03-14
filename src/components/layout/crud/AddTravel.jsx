import scss from "./AddTravel.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../../context/TravelContext";
import { useState } from "react";

const initialValues = {
  image: "",
  person: "",
  price: "",
  location: "",
  time: "",
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
    <section className={scss.admin}>
      <div className={scss.block}>
        <div className={scss.inputGroup}>
          <label>Изображение тура</label>
          <input
            onChange={(e) => handleInp(e)}
            type="text"
            placeholder="URL изображения"
            name="image"
          />
        </div>

        <div className={scss.inputGroup}>
          <label>Количество человек</label>
          <input
            onChange={(e) => handleInp(e)}
            type="text"
            placeholder="Количество человек"
            name="person"
          />
        </div>

        <div className={scss.inputGroup}>
          <label>Стоимость</label>
          <input
            onChange={(e) => handleInp(e)}
            type="text"
            placeholder="Стоимость"
            name="price"
          />
        </div>

        <div className={scss.inputGroup}>
          <label>Место назначения</label>
          <input
            onChange={(e) => handleInp(e)}
            type="text"
            placeholder="Место назначения"
            name="location"
          />
        </div>

        <div className={scss.inputGroup}>
          <label>Продолжительность</label>
          <input
            onChange={(e) => handleInp(e)}
            type="text"
            placeholder="Продолжительность"
            name="time"
          />
        </div>

        <div className={scss.inputGroup}>
          <label>Условия</label>
          <input
            onChange={(e) => handleInp(e)}
            type="text"
            placeholder="Условия"
            name="condition"
          />
        </div>

        <button onClick={handleSubmit}>Создать тур</button>
      </div>
    </section>
  );
};

export default AddTravel;
