
import { useState } from "react";
import { useEffect } from "react";
function UseFetch(url){

    const[loading,setLoading]=useState(true);
    const[datos,setDatos]=useState([]);
    useEffect(()=>{
        fetch(url).then((response)=>
            response.json()).
        then((datos)=>{
            setDatos(datos);
        }).finally(()=>{
            setLoading(false);

        });

    },[])

    return {datos,loading};


}

export default UseFetch;