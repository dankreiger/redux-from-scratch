import { combineReducers } from "../lib/combineReducers";
import wooferReducer from "./woofer.reducer";
import dataReducer from "./data.reducer";

export default combineReducers({
  wooferReducer,
  dataReducer
});
