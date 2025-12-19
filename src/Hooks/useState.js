import {useState} from 'react';

export default function UseState(){

    const [count,setCount] = useState(0);
    return(
        <>
        <p>
            Count is: {count}
        </p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    );
}