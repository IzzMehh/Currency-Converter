import React, { useId } from "react";


function InputBox({
    amount,
    setAmount,
    from,
    setFrom,
    to,
    setTo,
    swap,
    options = [],
}){

    const id = useId()
    
    console.log(options)
 return(
 <>
    <div className="bg-white flex flex-col ">
        <label className="text-base md:text-xl font-semibold " htmlFor={id}>Amount</label>
        <input className="p-3 border-2 rounded-md outline-none" id={id} type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(Number(e.target.value))}/>
    </div>
    <div className="bg-white flex flex-col md:mx-3">
        <label className="text-base md:text-xl font-semibold"  >From</label>
        <select className="p-3 border-2 rounded-md h-[52px] outline-none cursor-pointer" onChange={(e)=>setFrom(e.target.value)}>
            <option className="text-xl" value={from}>{from.toUpperCase()}</option>
            {options.map((data)=>{
            return(
            <option  className="text-xl" key={data} value={data} >{data.toUpperCase()}</option>
            )
            })}
        </select>
    </div>
    <div className="text-center text-blue-600 text-3xl flex items-center  justify-center">
    <div className="h-[52px] w-16 hover:bg-[#F1EEEE] cursor-pointer border rounded-full flex items-center justify-center" onClick={swap}> <p> <ion-icon name="swap-horizontal-outline"></ion-icon></p></div>
    </div>
    <div className="bg-white flex flex-col md:mx-3">
        <label className="text-base md:text-xl font-semibold"  >To</label>
        <select className="p-3 border-2 rounded-md h-[52px] outline-none cursor-pointer" onChange={(e)=>setTo(e.target.value)}>
            <option  className="text-xl" value={to}>{to.toUpperCase()}</option>
            {options.map((data)=>{
            return(
            <option key={data} value={data} className="text-xl" >{data.toUpperCase()}</option>
            )
            })}
        </select>
    </div>
    </>
 )   
}

export default InputBox