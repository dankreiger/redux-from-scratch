import "./lib";
import "./src/scss";
import "./domListeners";
import store from "./src/store";

window.store = store;

const render = () => {
  document.getElementById(
    "app"
  ).innerHTML = store.getState().wooferReducer.breed;
};

store.subscribe(render);
render();
