import "./lib";
import "./src/scss";
import store from "./src/store";

window.store = store;

document.querySelector("input").addEventListener("input", e => {
  store.dispatch({ type: "UPDATE_WOOFER", payload: e.target.value });
});

const render = () => {
  document.getElementById(
    "app"
  ).innerHTML = store.getState().wooferReducer.breed;
};

store.subscribe(render);
render();
