import React from 'react';
import currencies from './currencies';

const DashBoardSelect = (props) => {
    //Generate drop down box
    const displayDropDown = () => {
        return (
            Object.entries(currencies).map(elem => {
                return (
                    elem[0] === 'CAD'? <option key={elem[0]} value={elem[0]} defaultValue="selected">{elem[1]}</option> : <option key={elem[0]} value={elem[0]}>{elem[1]}</option>
                )
            })
        );
        // for (let curr in currencies) {
        //     optionHTML += curr === 'CAD' ? <option value="${curr}" selected="selected">${currencies[curr]}</option>` : `<option value="${curr}">${currencies[curr]}</option>`;
        // }
        // console.log(optionHTML)
        // return optionHTML;
    }
    return (
        <div className="App__dashboardSelect">
            <label htmlFor="baseSelect">Select Base Currency</label>
            <select id="baseSelect" onChange={props.handleBaseSelect}>
            {displayDropDown()}
            </select>
        </div>

    );
}

export default DashBoardSelect;