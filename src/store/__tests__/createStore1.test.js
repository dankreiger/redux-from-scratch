import { createStore1 as createStore } from "../createStore1";
import { combineReducers } from "../../lib/combineReducers";
import wooferReducer from "../../reducers/woofer.reducer";
describe("createStore1", () => {
  it("exposes redux api", () => {
    const store = createStore(wooferReducer);
    const methods = Object.keys(store);
    expect(methods.length).toBe(3);
    expect(methods).toContain("getState");
    expect(methods).toContain("dispatch");
    expect(methods).toContain("subscribe");
  });
  it("exposes redux api with combine reducers", () => {
    const store = createStore(combineReducers({ wooferReducer }));
    const methods = Object.keys(store);
    expect(methods.length).toBe(3);
    expect(methods).toContain("getState");
    expect(methods).toContain("dispatch");
    expect(methods).toContain("subscribe");
  });
  it("throws if reducer is not a function", () => {
    expect(() => createStore()).toThrow();
    expect(() => createStore("test")).toThrow();
    expect(() => createStore({})).toThrow();
    expect(() => createStore(() => {})).not.toThrow();
  });

  it("passes the initial state", () => {
    const store = createStore(wooferReducer, {
      breed: null
    });
    expect(store.getState()).toEqual({
      breed: null
    });
  });

  it("applies the reducer to the initial state", () => {
    const store = createStore(wooferReducer, {
      breed: "Golden Retriever"
    });
    expect(store.getState()).toEqual({ breed: "Golden Retriever" });

    store.dispatch({ type: "UPDATE_WOOFER", payload: "Poodle" });
    expect(store.getState()).toEqual({ breed: "Poodle" });
  });
});
