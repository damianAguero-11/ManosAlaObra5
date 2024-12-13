import EstructuraPaginas from "./EstructuraPaginas";
import UseFetch from "./UseFetch";
import ListItems from "./ListItems";
import { useState } from "react";
import { Link } from "react-router-dom";
function Proyectos(){

    const url='https://lamansysfaketaskmanagerapi.onrender.com/api/projects';
    const url2='https://jsonplaceholder.typicode.com/todos';
const{datos,loading}=UseFetch(url2);

  
  const datosItems=datos.map(
    dato=><ListItems key={dato?.id}>
        <nav>
            <Link to={`/my-projects/${dato.id}`}>
        <h3>{dato?.title}</h3>
        <p>{dato?.completed===true?'true':'false'}</p>
        </Link>
        </nav>
        
    </ListItems>
  )
    return(
        <>

        <EstructuraPaginas nombre={'mis proyectos'}>

            <h3 className="contenidoentidades">proyectos</h3>
            {loading?(<p>cargando...</p>):('')}

            {datosItems?( 
                <ul>
                    {datosItems}
              </ul>):
              (<p>no hay proyectos disponibles</p>)}
           

        </EstructuraPaginas>
        </>
    )
}
export default Proyectos;