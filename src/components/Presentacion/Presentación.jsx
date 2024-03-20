import React from "react";
import miCV from '../../assets/CV-Luis_Angel_Armuto_Abarca.pdf'
import { Boton } from "../Boton";

export const Presentación = () => {
  return (
    <article className="presentacion">
      <main className="contenido">
        <div>
          <h2 className="contenido-especialidad especialidad">
            Front End Developer
          </h2>
          <h2 className="contenido-nombre nombre">Luis Angel Armuto Abarca</h2>
          <p className="contenido-resumen">
            Listo para afrontar desafios con creatividad.Transformo ideas en experencias memorables
          </p>
        </div>
        <Boton texto='Descarga mi cv' href={miCV} download='CV-Luis_Angel_Armuto_Abarca' />
      </main>
    </article>
  );
};
