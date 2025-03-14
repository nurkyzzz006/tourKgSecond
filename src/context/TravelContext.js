import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const travelContext = createContext();
export const useData = () => useContext(travelContext);

const initialState = {
  data: [],
  fullData: [], // Храним все данные без фильтрации
  moreProd: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "FILTER":
      return { ...state, data: action.payload };
    case "GET_MORE":
      return { ...state, moreProd: [action.payload] };
    case "GET_ONE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const TravelContext = ({ children }) => {
  const API = "https://api-crud.elcho.dev/api/v1/2721f-d8c60-85adb/api";
  const API_TRAVEL =
    "https://api-crud.elcho.dev/api/v1/07b35-58cd3-fccd4/travel";
  const [state, dispatch] = useReducer(reducer, initialState);
  //add
  async function addProduct(newData) {
    await axios.post(API, newData);
  }
  async function addTravel(newProduct) {
    await axios.post(API_TRAVEL, newProduct);
  }
  //add
  //!--------->
  //read
  async function readProduct() {
    let { data } = await axios(API);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }
  async function readTravel() {
    let { data } = await axios(API_TRAVEL);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }
  //read
  //!--------->

  //delete
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  async function deleteTravel(id) {
    await axios.delete(`${API_TRAVEL}/${id}`);
    readTravel();
  }
  //delete
  //!
  //upDate coment
  async function getOneProduct(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: data.data,
    });
  }
  //!
  async function getMoreProduct(id) {
    let data = await axios.get(`${API_TRAVEL}/${id}`);
    dispatch({
      type: "GET_MORE",
      payload: data.data,
    });
  }
  //!
  async function editProduct(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  function searchTravel(searchValue) {
    let result = state.data.filter((item) =>
      item.message.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch({
      type: "GET",
      payload: result,
    });
    if (!searchValue) {
      readProduct();
    }
  }
  //!
  function searchMas(masValue) {
    let res = state.data.filter((item) =>
      item.person.toLowerCase().includes(masValue.toLowerCase())
    );
    dispatch({
      type: "GET",
      payload: res,
    });
    if (!masValue) {
      readTravel();
    }
  }
  //upDate coment
  //!
  //upDate //? Travel
  async function getOneTravel(id) {
    let data = await axios.get(`${API_TRAVEL}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: data.data,
    });
  }
  async function editTravel(id, editTravel) {
    delete editTravel._id;
    await axios.patch(`${API_TRAVEL}/${id}`, editTravel);
  }

  //upDate //? Travel

  //! pagination 

  //!
  const [page, setPage] = useState(1);
  const itemPerPages = 1;
  const count = Math.ceil(state.data.length / itemPerPages);

  function handlerPage() {
    let start = (page - 1) * itemPerPages;
    let end = start + itemPerPages;
    return state.data.slice(start, end);
  }
  const values = {
    addTravel,
    data: state.data,
    readTravel,
    deleteTravel,
    editTravel,
    getOneTravel,
    searchMas,
    moreProd:state.moreProd,
    //!
    addProduct,
    data: state.data,
    readProduct,
    deleteProduct,
    editProduct,
    getOneProduct,
    searchTravel,
    getMoreProduct,
    count,
    setPage,
    handlerPage,
  };
  return (
    <travelContext.Provider value={values}>{children}</travelContext.Provider>
  );
};

export default TravelContext;
