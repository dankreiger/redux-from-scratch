import logCss from "../helpers/logger";

export function combineReducers(reducers) {
  // First get an array with all the keys of the reducers (the reducer names)
  const reducerKeys = Object.keys(reducers);
  return function combination(state = {}, action = "redux_init") {
    // This is the object we are going to return.
    const nextState = {};
    // Loop through all the reducer keys
    for (let i = 0; i < reducerKeys.length; i++) {
      // Get the current key name
      const key = reducerKeys[i];
      // Get the current reducer
      const reducer = reducers[key];
      // Get the the previous state
      const previousStateForKey = state[key];
      logCss(previousStateForKey, "previous state", "orange");

      // Get the next state by running the reducer
      const nextStateForKey = reducer(previousStateForKey, action);
      // Update the new state for the current reducer
      nextState[key] = nextStateForKey;

      logCss(action, "action", "blue");
      logCss(nextState, "new state", "green");
    }
    return nextState;
  };
}
