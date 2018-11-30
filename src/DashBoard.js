import React from 'react';
import DashBoardBase from './DashBoardBase';


const DashBoard = (props) => {
    const displayRates = (sym) => {
        return props.dashboardRates.Rates ? Number.parseFloat(props.dashboardRates.Rates[sym]).toFixed(6) : ""
    }

    const displayDate = () => {
        return props.dashboardRates.Date ? `Last Updated: ${props.dashboardRates.Date}` : "";
    }
    return(
        <React.Fragment>
        <ul className="App__dashboardDisplay">
            <li>
                <DashBoardBase symbol="USD" />
                <p className="App__dashboardDisplayText">
                {displayRates('USD')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="EUR" />
                <p className="App__dashboardDisplayText">
                {displayRates('EUR')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="GBP" />
                <p className="App__dashboardDisplayText">
                {displayRates('GBP')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="MXN" />
                <p className="App__dashboardDisplayText">
                {displayRates('MXN')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="CAD" />
                <p className="App__dashboardDisplayText">
                {displayRates('CAD')}
                </p>
            </li>
        </ul>
        <p className="App__dashboardDisplayUpdate">{displayDate()}</p>
        </React.Fragment>
    );

}

export default DashBoard;