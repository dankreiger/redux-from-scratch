const initialState = { loading: false, error: null, data: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_BEGIN":
      return {
        ...state,
        loading: true
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case "GET_DATA_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
