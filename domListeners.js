import store from "./src/store";
document.querySelector("input").addEventListener("input", e => {
  console.log(e.target.value);
  store.dispatch({ type: "UPDATE_WOOFER", payload: e.target.value });
});
