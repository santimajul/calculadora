import React from "react";
import '../hojas-de-estilo/pantalla.css'

function Pantalla(props){

    return (

            <div className="pantalla">{props.input}</div>
    );
};

export default Pantalla;