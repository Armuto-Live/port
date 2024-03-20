import React from "react";
import Image from "../../assets/sobre-mi.jpg";

import { projects } from "../../constants/project";
import { Boton } from "../Boton";

export const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos">
      <h2 className="proyectos-titulo">Proyectos</h2>
      <div className="tarjetas">
        {projects.map((project) => {
          return (
            <article key={project.id} className="tarjeta">
              <div className="tarjeta-interior">
                <div className="tarjeta-interior-frontal">
                  <h2> {project.title} </h2>
                  <img src={project.image} alt="gato" />
                </div>
                <div className="tarjeta-interior-inverso">
                  <figure>
                    <img
                      className="tarjeta-interior-inverso-imagen"
                      src={project.image}
                      alt={project.title}
                    />
                    <figcaption className="tarjeta-interior-titulo">
                      {project.title}
                      <span>{project.description}</span>
                    </figcaption>
                  </figure>
                  <div className="tarjeta-interior-inverso-descripcion">
                    <div className="tarjeta-interior-tags">
                    {project.tags.map((tag,id)=>{
                      return(
                        <div key={id} className="tag">
                          {
                            <img src={tag.src} alt={tag.name} height='25px' width='25px' />
                          }
                        </div>
                      )
                    })}
                    </div>
                    <div className="tarjeta-interior-inverso-botones">
                      <Boton className='tarjeta-interior-inverso-boton boton ' texto='Visitar' href={project.liveVersion} target='_blank' />

                      <Boton className='tarjeta-interior-inverso-boton boton ' texto='Codigo' href={project.source} target='_blank' />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
