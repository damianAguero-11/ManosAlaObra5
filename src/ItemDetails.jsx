import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UseFetch from "./UseFetch";
function ItemDetails(){

   
    const[id,setId]=useState('');
const {proyectId}=useParams();
const url2=`https://jsonplaceholder.typicode.com/todos/${id}`;
const {datos,loading}=UseFetch(url2);

useEffect(()=>{

setId(proyectId);

},[])
    return(
        <>
        pagina {id}
        </>
    )

}
export default ItemDetails;