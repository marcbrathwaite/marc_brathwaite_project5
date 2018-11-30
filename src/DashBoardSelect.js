import React from 'react';
// import currencies from './currencies';
import DisplayDropDown from './DisplayDropDown';

const DashBoardSelect = (props) => {
    //Generate drop down box
    // const displayDropDown = (str) => {
    //     return (
    //         Object.entries(currencies).map(elem => {
    //             return (
    //                 elem[0] === 'CAD'? <option key={`${str}-${elem[0]}`} value={elem[0]} defaultValue="selected">{elem[1]}</option> : <option key={elem[0]} value={elem[0]}>{elem[1]}</option>
    //             )
    //         })
    //     );   
// }
    return (
        <div className="App__dashboardSelect">
            <label htmlFor="baseSelect">Select Base Currency</label>
            <select value={props.baseCurrency} id="baseSelect" onChange={props.handleBaseSelect}>
            <DisplayDropDown ID="dashboardSelect" />
            </select>
        </div>

    );
}

export default DashBoardSelect;