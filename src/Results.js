import React from 'react';

const Results = (props) => {
  const calculateResult = () => {
    return (props.amountInput == 0 || !props.amountInput) ? 0 : (parseFloat(props.amountInput) * props.selectedRate).toFixed(6);
  }
  return (
    <div className="App__conversionResults">
      <p className="App__conversionResultsFrom">   {!props.amountInput ? 0 : props.amountInput} {props.fromChoice} =
      </p>
      <p className="App__conversionResultsTo">{calculateResult()} <span className="App__conversionResultsTo--Small">{props.toChoice}</span>
      </p>
      <p className="App__conversionResultsRate">
              1 {props.fromChoice} = {props.selectedRate} {props.toChoice}
      </p>
    </div>
  );
}

export default Results;