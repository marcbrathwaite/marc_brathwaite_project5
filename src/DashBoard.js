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
                <p>
                {displayRates('USD')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="EUR" />
                <p>
                {displayRates('EUR')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="GBP" />
                <p>
                {displayRates('GBP')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="MXN" />
                <p>
                {displayRates('MXN')}
                </p>
            </li>
            <li>
                <DashBoardBase symbol="CAD" />
                <p>
                {displayRates('CAD')}
                </p>
            </li>
        </ul>
        <p>{displayDate()}</p>
        </React.Fragment>
    );

}

export default DashBoard;