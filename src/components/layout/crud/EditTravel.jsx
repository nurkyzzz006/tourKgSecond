import scss from "./AddTravel.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../context/TravelContext";
import { useEffect, useState } from "react";
import "./AddTravel.module.scss";
const initialValues = {
  image: "",
  person: "",
  price: "",
  location: "",
  time: "",
  conditions: "",
};
const EditTravel = () => {
  const { getOneTravel, editTravel, oneProd } = useData();
  const { id } = useParams();
  const [inputValue, setInputValue] = useState(initialValues);
  console.log(inputValue);
  const navigate = useNavigate();

  useEffect(() => {
    getOneTravel(id);
  }, []);

  useEffect(() => {
    if (oneProd) {
      setInputValue(oneProd);
    }
  }, [oneProd]);

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

  const save = () => {
    editTravel(id, inputValue);
  };

  return (
    <>
      <section className={scss.admin}>
        <div className={scss.block}>
          <div className={scss.inputGroup}>
            <label>Изображение тура</label>
            <input
              onChange={handleInp}
              value={inputValue.image}
              type="text"
              placeholder="URL изображения"
              name="image"
            />
          </div>

          <div className={scss.inputGroup}>
            <label>Количество человек</label>
            <input
              onChange={handleInp}
              value={inputValue.person}
              type="text"
              placeholder="Количество человек"
              name="person"
            />
          </div>

          <div className={scss.inputGroup}>
            <label>Стоимость</label>
            <input
              onChange={handleInp}
              value={inputValue.price}
              type="text"
              placeholder="Стоимость"
              name="price"
            />
          </div>

          <div className={scss.inputGroup}>
            <label>Место назначения</label>
            <input
              onChange={handleInp}
              value={inputValue.location}
              type="text"
              placeholder="Место назначения"
              name="location"
            />
          </div>

          <div className={scss.inputGroup}>
            <label>Продолжительность</label>
            <input
              onChange={handleInp}
              type="text"
              value={inputValue.time}
              placeholder="Продолжительность"
              name="time"
            />
          </div>

          <div className={scss.inputGroup}>
            <label>Условия</label>
            <input
              onChange={handleInp}
              type="text"
              placeholder="Условия"
              name="condition"
            />
          </div>

          <button onClick={() => save(navigate("/"))}>save</button>
        </div>
      </section>
    </>
  );
};

export default EditTravel;
