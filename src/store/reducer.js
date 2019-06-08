import uuid from "uuid";

import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  RESET,
  STORE_RESULT,
  DELETE_RESULT
} from "./types";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  const { type, value, payload } = action;
  const { counter, results } = state;

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
    // this case updated the results from our state. It simply re-uses the value stored in the "counter" state and passes an id of Date.
    case STORE_RESULT:
      return {
        ...state,
        results: results.concat({ id: uuid.v4(), value: counter })
      };
    // we take the "results" and create a new array. It's only gonna include items which IDs are different thatn the one that's received (clicked)
    // This will mean that the clicked element will disappear
    case DELETE_RESULT:
      const updatedResults = results.filter(result => result.id !== payload);
      return {
        ...state,
        results: updatedResults
      };

    default:
      return state;
  }
};

export default reducer;
