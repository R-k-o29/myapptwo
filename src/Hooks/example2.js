import {useState} from 'react';

export default function Example2(){
    const[name,setname]=useState("");

    function callFunction(event){
        setname(event.target.value)
    }

    return(
        <>
        <input type='text' placeholder='Enter your Name' onChange={callFunction}></input>

        <p>You typed: {name}</p>

        </>
    );
}