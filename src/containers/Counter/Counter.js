import React from "react";
import { connect } from "react-redux";
import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  RESET,
  STORE_RESULT,
  DELETE_RESULT
} from "../../store/types";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = props => {
  return (
    <div>
      {/* <CounterOutput value={state.counter} /> */}
      {/* Now we don't pass the state anymore, but the storedCounter (as props) that goes to the connect function */}
      <CounterOutput value={props.storedCounter} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter} />
      <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
      <CounterControl label="Add 20" clicked={props.odAdd} />
      <CounterControl label="Subtract 20" clicked={props.onSubtract} />
      <CounterControl label="Reset" clicked={props.onResetCounter} />
      <hr />
      <button onClick={() => props.onStoreResult(props.storedCounter)}>
        Store Result
      </button>
      <ul>
        {props.storedResults.map(result => (
          <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>
            {result.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// we define what piece os state to pass as props (this will go through the "connect" below)
// If we don't pass any, the first argument of the "connect" function will be "null".
const mapStateToProps = state => {
  return {
    storedCounter: state.counterReducer.counter,
    storedResults: state.resultsReducer.results
  };
};

// here we define the method(function) we'd like to dispatch
// DISPATCHING ACTION
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: INCREMENT,
        value: 1
      }),
    onDecrementCounter: () => {
      dispatch({
        type: DECREMENT,
        value: 1
      });
    },
    odAdd: () => {
      dispatch({
        type: ADD,
        value: 20
      });
    },
    onSubtract: () => {
      dispatch({
        type: SUBTRACT,
        value: 20
      });
    },
    onResetCounter: () => {
      dispatch({ type: RESET });
    },
    onStoreResult: singleResult => {
      dispatch({ type: STORE_RESULT, payload: singleResult });
    },
    onDeleteResult: id => {
      dispatch({ type: DELETE_RESULT, payload: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
