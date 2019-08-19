const initialState = { breed: null };

export function wooferReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_WOOFER":
      return {
        ...state,
        breed: action.payload
      };
    default:
      return state;
  }
}
