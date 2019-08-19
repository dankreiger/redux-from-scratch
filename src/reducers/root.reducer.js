import { combineReducers } from "../lib/combineReducers";
import personReducer from "./person.reducer";

export default combineReducers({
  person: personReducer
});
