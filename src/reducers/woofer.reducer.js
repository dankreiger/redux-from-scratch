const initialState = { breed: null };

export default (state = initialState, action) => {
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
