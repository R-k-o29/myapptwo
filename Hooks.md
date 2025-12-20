States:
- States can be considered as changing data of a component
- States can be initialized only inside the component

Hooks

-> Manages states in reactJs
-> Hooks are special functions that let you use React features (like state and lifecycle methods) inside simple function components.

Summary: 

- Physically: They are JavaScript functions starting with use.

- Conceptually: They are connectors (cables) that link your code to React's internal features.

- Functionally: They let you "plug in" features (like state or effects) into simple functions, avoiding the need for complex Class structures.

1. useState 

-> import {useState} from "react"

-> Syntax:

    - const [value,setValue] = useState(initialValue);

    - Using setValue(setState) one can modify the state(data) of a component

2. useEffect

-> import {useEffect} from "react"

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


