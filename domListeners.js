import "babel-polyfill";
import store from "./src/store";
import { updateWoofer } from "./src/actions/woofer.actions";
import { getDataBegin } from "./src/actions/data.actions";

document
  .querySelector("input")
  .addEventListener("input", e => store.dispatch(updateWoofer(e.target.value)));

document.querySelector("button").addEventListener("click", getDataBegin);
