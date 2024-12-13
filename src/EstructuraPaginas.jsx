
import Menu from "./Menu";
import Header from "./Header";
import { useState } from "react";
function EstructuraPaginas({nombre,children}){

    const[desplegado,setDesplegado]=useState('Close');



    const handleclick=()=>{
        setDesplegado(()=>{
            return desplegado==='Close'?'Open':'Close';
        });
    }

    return(
        <>
        <Menu onClick={handleclick} estado={desplegado}/>
        <Header onClick={handleclick} nombre={nombre}/>

        <div className="maincontenido">
            {children}
        </div>
        </>
    )
    
}
export default EstructuraPaginas;