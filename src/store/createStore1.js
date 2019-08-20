import { injectMiddleware } from "../lib/injectMiddleware";
/**
 * @description createStore var I
 * */
export const createStore1 = (reducer, preloadedState, enhancer) => {
  let state = preloadedState;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };
  injectMiddleware(enhancer);

  dispatch({});
  return { getState, dispatch, subscribe };
};
