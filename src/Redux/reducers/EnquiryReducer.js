const defaultState = require("../Store/state.json");
const postReducer = (state = defaultState, action) => {
  switch (action.type) {
  
    case "RETREIVING_START":
      return { ...state, error: false };
    case "RETREIVING_SUCCESS":
      return {
        ...state,
        enquiry: action.data,
        error: false,
      };

    case "RETREIVING_FAIL":
      return { ...state, error: true };

    default:
      return state;
  }
};

export default postReducer;
