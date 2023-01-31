import React from "react";
import '../hojas-de-estilo/Delete.css'

function Delete(props){

    return (
        <div className="delete"
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
};

export default Delete;