import React from 'react';
import currencies from './currencies';

//Generate drop down box
const DisplayDropDown = (props) => {
       return (
           
               Object.keys(currencies).sort((a,b) => a>b).map(key => {
                   return (
                    <option key={`${props.ID}-${key}`} value={key}>{currencies[key]}</option>
                   )
               })
           
        );
}

export default DisplayDropDown;