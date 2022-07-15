import React, {useEffect, useState} from 'react';
import axios from "axios";
import './index.css'

const ExchangeRate = () => {
    const [rate, setRate] = useState()
    const [rate2, setRate2] = useState()
    const getRate =()=>{
        axios.get(`https://api.fastforex.io/fetch-one?from=EUR&to=UAH&api_key=c38ca768bf-88d319401d-reymjw`).then(({data})=>{
            setRate(data.result.UAH)
        })
        axios.get(`https://api.fastforex.io/fetch-one?from=USD&to=UAH&api_key=c38ca768bf-88d319401d-reymjw`).then(({data})=>{
            setRate2(data.result.UAH)
        })
    }
    useEffect(()=>{
            getRate()
    },[])


    return (
        <div className='styleMoney'>
            <div className='styleText'>EUR: {rate}</div>
            <div  className='styleText'>USD: {rate2}</div>
        </div>
    );
};

export default ExchangeRate;
