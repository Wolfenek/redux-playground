import React, { Component } from "react";
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

class Counter extends Component {
  render() {
    return (
      <div>
        {/* <CounterOutput value={this.state.counter} /> */}
        {/* Now we don't pass the state anymore, but
                the ctr (as props) that goes to the connect function
            */}
        <CounterOutput value={this.props.storedCounter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 20" clicked={this.props.onAdd5} />
        <CounterControl label="Subtract 20" clicked={this.props.onSubtract5} />
        <CounterControl label="Reset" clicked={this.props.onResetCounter} />
        <hr />
        <button
          onClick={() => this.props.onStoreResult(this.props.storedCounter)}
        >
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

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
    onAdd5: () => {
      dispatch({
        type: ADD,
        value: 20
      });
    },
    onSubtract5: () => {
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
