import React from 'react';

const DashBoardBase = (props) => {
    return (
        <React.Fragment>
            <div>
                Image here
            </div>
            <p>
               {props.symbol}
            </p>
        </React.Fragment>
    );
}

export default DashBoardBase;
