import React from 'react';

const Results = (props) => {

    const calculateResult = () => {
        return (props.amountInput == 0 || !props.amountInput) ? 0 : (parseFloat(props.amountInput) * props.selectedRate).toFixed(6);
    }
    return (
        <div className="App__Results">
            <p>{!props.amountInput ? 0 : props.amountInput} {props.fromChoice} =</p>
            <p>{calculateResult()} <span>{props.toChoice}</span></p>
        </div>
    );
}

export default Results;