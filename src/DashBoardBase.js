import React from 'react';
import flagicons from './flagicons';


// import canada from './img/canada.png'



const DashBoardBase = (props) => {
    return (
        <div className="App__dashboardBase">
            <div className={`App__dashboardBase--Image flag-icon-background ${flagicons[props.symbol]}`}>
            </div>
            <p className="App__dashboardBase--Text">
               {props.symbol}
            </p>
        </div>
    );
}

export default DashBoardBase;
