import React from 'react'
import Boton from './componentes/Boton.js'
import Pantalla from './componentes/pantalla'
import Delete from './componentes/Delete'
import './App.css';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {
   
   const [input,setInput] = useState('')

   const agregarInput = valor =>{
      if(input[0] == '+' || input[0] == '-' || input[0] == '*' || input[0] == '/' || input[0] == '.'){
         alert('debe agregar un numero primero');  
         setInput('');
      }else{
      setInput(input + valor);
      }
   };

   const calcularValor = () =>{
         if(input == ''){
            alert('debe agregar un numero primero');
         }else{
            setInput(evaluate(input))
         }    
   }

   const borrar = () =>{
      setInput('');
   };

  return (
    <div className="App">      
       <div className='calculadora-container'>
       <Pantalla input={input} />
         <div className='filas'>
            <Boton manejarClick={agregarInput} >1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
         </div>
         <div className='filas'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
         </div>
         <div className='filas'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
         </div>
         <div className='filas'>
            <Boton manejarClick={calcularValor}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
         </div>
         <Delete manejarClick={borrar}>Delete</Delete>
       </div>
    </div>
  );
}

export default App;
