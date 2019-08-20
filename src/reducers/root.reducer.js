import { combineReducers } from "../lib/combineReducers";
import wooferReducer from "./woofer.reducer";
import dataReducer from "./data.reducer";
import usersReducer from "./users.reducer";

export default combineReducers({
  wooferReducer,
  dataReducer,
  usersReducer
});
