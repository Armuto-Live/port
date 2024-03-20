import React from "react";

export const Boton = (props) => {

  return (
    <a className={props.texto==='Descarga mi cv'? "boton" :'boton tarjeta-interior-inverso-boton' } href={props.href} target={props.target} download={props.download}>
      <span></span>{props.texto}
    </a>
  );
};
