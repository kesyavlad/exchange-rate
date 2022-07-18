import React, {useEffect, useState} from 'react';
import './index.css'
import CurrencyInput from "../CurrentInput/CurrencyInput";
import {getAll} from "../../api/endpoints";

const Conversion = () => {
    const [inputOne, setInputOne] = useState<number>(0);
    const [inputTwo, setInputTwo] = useState<number>(0);
    const [currency1, setCurrency] = useState<string>('USD');
    const [currency2, setCurrency2] = useState<string>('UAH');
    const [rates, setRates] = useState<{ [key: string]: number }[]>([])
    const getCurrens =()=> {
        getAll().then(({data}) => {
            setRates(data.results)
        })
    }

    useEffect(()=>{
        getCurrens()
    },[])
    const format=(number:any)=>{
            return number.toFixed(2)
    }
    const changeInputOne = (inputOne:number) => {
      setInputTwo(format(inputOne * rates[currency2] /rates[currency1]))
        setInputOne(inputOne)
    }
    const changeValue = (currency1:string) => {
        setInputTwo(format(inputOne * rates[currency2] / rates[currency1]))
        setCurrency(currency1)
    }
    const changeInputTwo = (inputTwo:number) => {
        setInputOne(format(inputTwo * rates[currency1] /rates[currency2]))
        setInputTwo(inputTwo)
    }
    const changeValue2 = (currency2:string) => {
        setInputOne(format(inputTwo * rates[currency1] /rates[currency2]))
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
