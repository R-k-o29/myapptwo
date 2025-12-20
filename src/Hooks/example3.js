import { useEffect,useState } from "react";

export default function Example3() {

    const[submitted,setsubmitted]=useState(false);

    //useEffect syntax
    // useEffect( function, dependencyArray );
    useEffect(
        ()=>{
            if(submitted){
                alert("submitted form")
            }
        },[submitted]
    )//only triggers when value of submitted changes

    return(
        <>
        <button onClick={()=>setsubmitted(true)}>Submit</button>
        </>
    );
}