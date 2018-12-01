import React from 'react';
import DisplayDropDown from './DisplayDropDown';

const DashBoardSelect = (props) => {
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