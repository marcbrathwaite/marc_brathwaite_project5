import React from 'react';
import DisplayDropDown from './DisplayDropDown';
import flagicons from './flagicons';

const ConversionForm = (props) => {
  return (
    <form action="" className="App__conversionForm">
      <fieldset className="App__conversionFormInput">
        <label htmlFor="amountInput" className="App__conversionFormLabel">Amount</label>
        <input id="amountInput" value={props.amountInput} onChange={props.handleConversionInput} type="text" maxlength="15"/>
      </fieldset>
      <fieldset className="App__conversionFormInput">
        <div className={`App__conversionImage flag-icon-background ${flagicons[props.fromChoice]}`}> </div>
        <label htmlFor="fromChoice" className="App__conversionFormLabel">From</label>
        <select value={props.fromChoice} id="fromChoice" onChange={props.handleConversionFromSelect}>
        <DisplayDropDown ID="conversionFrom" />
        </select>
      </fieldset>
      <fieldset className="App__conversionFormInput">
        <div className={`App__conversionImage flag-icon-background ${flagicons[props.toChoice]}`}></div>
        <label htmlFor="toChoice" className="App__conversionFormLabel">To</label>
        <select value={props.toChoice} id="toChoice" onChange={props.handleConversionToSelect}>
        <DisplayDropDown ID="conversionTo" />
        </select>
      </fieldset>    
    </form>
    );
}

export default ConversionForm;