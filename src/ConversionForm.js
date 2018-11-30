import React from 'react';
import DisplayDropDown from './DisplayDropDown';

const ConversionForm = (props) => {
    return (
        <form action="" className="App__ConversionForm wrapper" onSubmit={props.handleConversionForm}>
       
        <fieldset className="App__ConversionFormInput">
            <label htmlFor="amountInput">Amount</label>
            <input id="amountInput" value={props.amountInput} onChange={props.handleConversionInput} type="text"/>
        </fieldset>
        <fieldset className="App__ConversionFormInput">
            <label htmlFor="fromChoice">From</label>
            <select value={props.fromChoice} id="fromChoice" onChange={props.handleConversionSelect}>
            <DisplayDropDown ID="conversionFrom" />
            </select>
        </fieldset>
        <div className="App__ConversionFormInput">
            <i className="fas fa-arrow-right"></i>
        </div>

        <fieldset className="App__ConversionFormInput">
            <label htmlFor="toChoice">To</label>
            <select value={props.toChoice} id="toChoice" onChange={props.handleConversionSelect}>
            <DisplayDropDown ID="conversionTo" />
            </select>
        </fieldset>


       
        </form>
    );
}

export default ConversionForm;