import React from 'react';
import DisplayDropDown from './DisplayDropDown';

const DashBoardSelect = (props) => {
  return (
    <div className="App__dashboardSelect">
      <label htmlFor="baseSelect" className="App__baseSelectLabel">Select Base Currency</label>
      <select value={props.baseCurrency} id="baseSelect" className="App__baseSelectDropdown" onChange={props.handleBaseSelect}>
      <DisplayDropDown ID="dashboardSelect" />
      </select>
    </div>
    );
}

export default DashBoardSelect;