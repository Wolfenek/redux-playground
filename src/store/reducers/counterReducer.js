import { INCREMENT, DECREMENT, ADD, SUBTRACT, RESET } from "../types";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  const { type, value } = action;
  const { counter } = state;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        counter: counter + value
      };
    case DECREMENT:
      return {
        ...state,
        counter: counter - value
      };
    case ADD:
      return {
        ...state,
        counter: counter + value
      };
    case SUBTRACT:
      return {
        ...state,
        counter: counter - value
      };
    case RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
};

export default counterReducer;
