import React from "react";
import '../estilos/BotonClear.css'

const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear; 