import React from 'react';
import flagicons from './flagicons';

const DashBoardBase = (props) => {
    return (
        <div className="App__dashboardBase">
            <div className={`App__dashboardBaseImage flag-icon-background ${flagicons[props.symbol]}`}>
            </div>
            <p className="App__dashboardBaseText">
               {props.symbol}
            </p>
        </div>
    );
}

export default DashBoardBase;
