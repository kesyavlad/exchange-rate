import React, {FC} from 'react';
import './index.css'




interface Currencys {
    text:string;
    amount:number;
    valueInput:any;
    currency:string;
    valueSelect:any;
    currencies:any;

}

const CurrencyInput:FC <Currencys> = ({text, amount, valueInput, currency, valueSelect, currencies}) => {

    return (
        <div className='styleBlock'>
            <div style={{color:'white'}}>{text}</div>
            <input type='number' value={amount} onChange={event => valueInput(event.target.value)}  min="0" className='styleInput'/>
            <select value={currency} onChange={event => valueSelect(event.target.value)}>
                {currencies.map((currens:any)=>(
                    <option key={currens} value={currens}>{currens}</option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyInput;
