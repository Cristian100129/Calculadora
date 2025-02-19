import './App.css';
import Boton from './componentes/Boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import './estilos/Boton.css'; 
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {
    const [input, setInput] = useState(''); 

    const agregarInput = val =>{
        setInput(input + val); 
    };

    const calcular = () =>{
      if(input){
        setInput(evaluate(input))
      }else{
       setInput("Solo se reciben numeros primero ")
      }
    }

  return (
    <div className="App">
      <div className="titulo-contenedor">
        <h1 className="titulo">Calculadora</h1>
      </div>
      <div className="contenedor">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}
          >Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
