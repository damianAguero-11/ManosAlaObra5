import { useState } from "react";

function BotonMenu({onClick}){


    

    return(
        <div className="menu">
        <button className="boton" onClick={onClick}> ☰ </button>
        </div>
    )
}

export default BotonMenu;