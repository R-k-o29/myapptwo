Hooks

-> Manages states in reactJs

1. useState 

-> import {useState} from "react"

-> Syntax:
    const [value,setValue] = useState(initialValue);

2. useEffect

-> Helps us decide the lifecycle of the components
-> used to see if any components is rendered or rerendered 
-> Popular usecases:
    - Toggle timer
    - Fetching data using API
    - unmounting component (cleanup function inside the useEffect)

-> Syntax:
    useEffect(
        ()=>{
            //arrow function code
        }, [] //dependency array
    );


