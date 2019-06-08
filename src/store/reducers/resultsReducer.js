import { STORE_RESULT, DELETE_RESULT } from "../types";

import uuid from "uuid";

const initialState = {
  results: []
};

const resultsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { results } = state;

  switch (type) {
    // this case updated the results from our state. It simply re-uses the value stored in the "counter" state and passes an id of Date.
    case STORE_RESULT:
      return {
        ...state,
        results: results.concat({ id: uuid.v4(), value: payload })
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

export default resultsReducer;
