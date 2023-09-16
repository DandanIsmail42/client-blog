const initialState = {
  name: "dundun",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "ismail",
    };
  }
  return state;
};

export default globalReducer;
