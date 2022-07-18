import React, {useEffect, useState} from 'react';
import {getOne} from '../../api/endpoints'
import './index.css'

const ExchangeRate = () => {
    const [rateEUR, setRateEUR] = useState<number>()
    const [rateUSD, setRateUSD] = useState<number>()
    const getRate = ()=>{
        getOne('EUR').then(({data})=> {
            setRateEUR(data.result.UAH)
        })
        getOne('USD').then(({data})=> {
            setRateUSD(data.result.UAH)
        })
    }

    useEffect(()=>{
            getRate()
    },[])


    return (
        <div className='styleMoney'>
            <div className='styleText'>EUR: {rateEUR}</div>
            <div  className='styleText'>USD: {rateUSD}</div>
        </div>
    );
};

export default ExchangeRate;
