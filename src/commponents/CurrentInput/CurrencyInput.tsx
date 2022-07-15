import React from 'react';
import './index.css'

const CurrencyInput = (props:any) => {

    return (
        <div className='styleBlock'>
            <div style={{color:'white'}}>{props.text}</div>
            <input type='number' value={props.amount} onChange={event => props.valueInput(event.target.value)}  min="0" className='styleInput'/>
            <select value={props.currency} onChange={event => props.valueSelect(event.target.value)}>
                {props.currencies.map((currens:any)=>(
                    <option value={currens}>{currens}</option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyInput;
