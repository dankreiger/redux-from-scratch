const initialState = { name: undefined };

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default personReducer;
