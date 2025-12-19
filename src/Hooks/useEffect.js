import {useState,useEffect } from "react";

export default function UseEffect(){
    const [seconds, setSeconds] = useState(0);

    useEffect(
        ()=>{
            const interval = setInterval(()=>{
                setSeconds((prevSeconds)=> prevSeconds + 1);
            },1000)

            return ()=>{
                clearInterval(interval);
                console.log("Interval cleared");
            }
        },[]
    );
    return(
        <>
        <p>Seconds collapsed: {seconds}</p>
        <button onClick={()=> setSeconds(0)}>Reset</button>
        </>
    );
}