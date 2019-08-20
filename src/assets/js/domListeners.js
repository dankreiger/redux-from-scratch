import "babel-polyfill";
import store from "./../../store";
import { updateWoofer } from "./../../actions/woofer.actions";
import { getDataBegin } from "./../../actions/data.actions";

document
  .querySelector("input")
  .addEventListener("input", e => store.dispatch(updateWoofer(e.target.value)));

document.querySelector("button").addEventListener("click", getDataBegin);
