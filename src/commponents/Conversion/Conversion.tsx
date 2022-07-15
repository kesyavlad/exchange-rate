import React, {useEffect, useState} from 'react';
import './index.css'
import axios from "axios";
import CurrencyInput from "../CurrentInput/CurrencyInput";


const Conversion = () => {
    const [inputOne, setInputOne] = useState(0);
    const [inputTwo, setInputTwo] = useState(0);
    const [currency1, setCurrency] = useState('USD');
    const [currency2, setCurrency2] = useState('UAH');
    const [rates, setRates] = useState([])
    const getRate =()=>{
        axios.get(`https://api.fastforex.io/fetch-all?api_key=c38ca768bf-88d319401d-reymjw`).then(({data})=>{
            setRates(data.results)
        })
    }
    useEffect(()=>{
        getRate()
    },[])

    const format=(number:any)=>{
            return number.toFixed(4)
    }
    const changeInputOne = (inputOne:number) => {
      setInputTwo(format(inputOne * rates[currency2 as unknown as number] /rates[currency1 as unknown as number]))
        setInputOne(inputOne)
    }
    const changeValue = (currency1:any) => {
        setInputTwo(format(inputOne * rates[currency2 as unknown as number] /rates[currency1 as unknown as number]))
        setCurrency(currency1)
    }
    const changeInputTwo = (inputTwo:number) => {
        setInputOne(format(inputTwo * rates[currency1 as unknown as number] /rates[currency2 as unknown as number]))
        setInputTwo(inputTwo)
    }
    const changeValue2 = (currency2:any) => {
        setInputOne(format(inputTwo * rates[currency1 as unknown as number] /rates[currency2 as unknown as number]))
        setCurrency2(currency2)
    }



    return (
        <div className='styleCurent'>
            <CurrencyInput
                valueInput={changeInputOne}
                valueSelect={changeValue}
                currencies={Object.keys(rates)}
                amount={inputOne}
                currency={currency1}
                text = 'У меня есть'
            />
            <CurrencyInput
                valueInput={changeInputTwo}
                valueSelect={changeValue2}
                currencies={Object.keys(rates)}
                amount={inputTwo}
                currency={currency2}
                text = 'Я получу'
            />

        </div>
    );
};

export default Conversion;
