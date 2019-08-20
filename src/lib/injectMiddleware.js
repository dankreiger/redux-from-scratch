export function injectMiddleware(reducer, preloadedState, enhancer) {
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error("Expected the enhancer to be a function.");
    }

    return enhancer(createStore1)(reducer, preloadedState);
  }
}
