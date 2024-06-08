import React, { useCallback, useRef, useState } from "react";
import InputBox from "./components/InputBox";
import currencyConverter from "./hooks/useCurrencyInfo";
// import ConvertBtn from "./components/ConvertBtn";

function App(){
    const [amount,setAmount] = useState(0)
    const [from,setFrom] = useState('inr')
    const [to,setTo] = useState('usd')
    const dataRef = useRef(null)


    const data = currencyConverter(from)


    const converter = useCallback(()=>{
        return (typeof data == undefined) ? 0  :  (amount*data[to]).toFixed(3)
    },[amount,to,data])

    const swap = () =>{
        setFrom(to)
        setTo(from)
    }

    const options = Object.keys(data)
    
    
    return(
    <div className="h-screen  w-full flex items-center select-none bg-[url('https://images-ext-1.discordapp.net/external/bFtLR7vQCRpOogQCmxhWWEWsHFhsZ6Iy7yetUImD2W4/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1/https/images.pexels.com/photos/187041/pexels-photo-187041.jpeg?format=webp&width=797&height=598')] bg-no-repeat bg-cover">
    <div className="bg-white  max-w-[1150px] m-auto font-text-font px-7 md:px-10 grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_100px_1fr] md:grid-rows-3 py-4 md:py-12 rounded-2xl">
        <InputBox amount={amount} to={to} from={from} options={options} setAmount={setAmount} setTo={setTo} setFrom={setFrom} swap={swap}/> 
        <div className=" md:col-span-2 font-text-font hidden" ref={dataRef}>
            <div className="text-[#83767B] font-semibold text-base md:text-xl">{amount} {from.toUpperCase()} = </div>
            <div className="text-[#2e3c57]  text-lg md:text-xl font-bold my-2 md:my-4">{converter()} {to.toUpperCase()}</div>
            <div className="text-[#5c667b]">1 {from.toUpperCase()} = {data[to]} {to.toUpperCase()}</div>
        </div>
        <div className="md:col-start-4 md:row-start-3 text-white font-text-font font-semibold text-base md:text-xl text-center flex justify-end items-center mx-3 h-auto">
        <button onClick={()=>{
            (dataRef.current).classList.remove("hidden")
        }} className="bg-[#0374ED] px-7 h-[60px] rounded-xl hover:bg-[#0568D3]">Convert</button>
        </div>
    </div>
    </div>
    )
    

}

export default App