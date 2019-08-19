import store from "./src/store";
document.querySelector("input").addEventListener("input", e => {
  store.dispatch({ type: "UPDATE_WOOFER", payload: e.target.value });
});
