import "./lib";
import "./src/scss";
import "./domListeners";
import store from "./src/store";

window.store = store;

const renderBreed = () => {
  document.getElementById(
    "breedText"
  ).innerHTML = store.getState().wooferReducer.breed;
};

const renderAsyncData = () => {
  const { data } = store.getState().dataReducer;
  document.getElementById("dataText").innerHTML = data.map(d => d.title);
};

store.subscribe(renderBreed);
store.subscribe(renderAsyncData);
renderBreed();
renderAsyncData();
