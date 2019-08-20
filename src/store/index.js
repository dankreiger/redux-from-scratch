import { createStore1 } from "./createStore1";
import { createStore2 } from "./createStore2";
import rootReducer from "../reducers/root.reducer";
import applyMiddleware from "../lib/applyMiddleware";
import thunk from "../lib/thunk";

const middlewares = [thunk];

export default createStore1(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);
