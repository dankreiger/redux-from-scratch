import rootReducer from "./src/reducers/root.reducer";
import { createStore1 } from "./src/store/createStore1";
import { createStore2 } from "./src/store/createStore2";

const store = createStore1(rootReducer);
window.store = store;
