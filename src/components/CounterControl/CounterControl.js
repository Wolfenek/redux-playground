import React from "react";

import "./CounterControl.css";

const counterControl = props => {
  const { clicked, label } = props;
  return (
    <div className="CounterControl" onClick={clicked}>
      <h3>{label}</h3>
    </div>
  );
};

export default counterControl;
