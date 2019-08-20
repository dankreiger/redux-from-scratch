import store from "../store";

const getDataAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    store.dispatch({ type: "GET_DATA_SUCCESS", payload: data });
  } catch (error) {
    store.dispatch({ type: "GET_DATA_FAILURE", payload: error });
  }
};

export const getDataBegin = () => {
  store.dispatch({ type: "GET_DATA_BEGIN" });
  getDataAsync();
};
