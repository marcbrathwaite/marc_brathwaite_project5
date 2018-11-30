import React from 'react';

const ConversionForm = (props) => {
    return (
        <form action="" onSubmit={props.handleConversionForm}>
        <ul>
            <li>
                <label htmlFor="amountInput"></label>
                <input id="amountInput" value={props.amountInput} type="text"/>
                
            </li>
        </ul>
        </form>
    );
}

export default ConversionForm;