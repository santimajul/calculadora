import React from "react";
import '../hojas-de-estilo/botones.css'

function Boton(props) {

  const esOperador= valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }
  
    return (
      <div className= {`botones-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
      onClick={()=> props.manejarClick(props.children)}
      >
        {props.children}
      </div>
    );
}

export default Boton;