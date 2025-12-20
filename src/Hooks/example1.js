//useState
import {useState} from 'react';

export default function Example1() {
    // syntax
    // const[variable,setVariable]=useState(initialValue);
    const[count,setCount] = useState(0);

    return(
        <>
        <p>Value is : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    );
}