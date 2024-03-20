import React from "react";
import sombreMi from "../../assets/sobre-mi.jpg";
import {icons} from '../../constants/icons'
import { Iconos } from "./Iconos";
export const SobreMi = () => {
  return (
    <article id="sobre-mi"  className="sobre-mi">
      <div className="sobre-mi-descripcion">
        <div className="sobre-mi-titulo">
          <h2>Armuto</h2>
          <span>Ingeniero creativo</span>
        </div>
        <div className="sobre-mi-descripcion-contenido">
          <p className="sobre-mi-descripcion__parrafo">
            Soy desarrollador Front-End con background en Ingeniero Informático. Me gusta la programación por su constante crecimiento, por las nuevas
            tecnologías y siempre estoy dispuesto a aprender algo
            nuevo.
          </p>
          <p className="sobre-mi-descripcion__parrafo">
            
          </p>
          <p className="sobre-mi-descripcion__parrafo">
            Me encanta experimentar y siempre estoy buscando nuevas formas de
            mejorar mis habilidades y aprender nuevas cosas.
          </p>
          <p className="sobre-mi-descripcion__parrafo">
            Acualmente estoy en busqueda de una oportunidad laboral, también me
            encuentro mejorando mi portafolio y realizando proyectos personales.
            Soy consciente de la relevancia que tiene el idioma inglés en esta
            industria, es por ello que sigo mejorando mi nivel.
          </p>
        </div>
      </div>
      <div  className="sobre-mi-habilidades">
          <h2>Habilidades</h2>
        <div className="sobre-mi-habilidades-librerias">
          <h2 className="sobre-mi-habilidades-titulo">Lenguajes</h2>
          <div className="sobre-mi-habilidades-iconos">
            {icons.language.map((icon,i)=>{
              return <Iconos key={icon.id} src={icon.src} nombre={icon.name} />
            })}
          </div>
        </div>
        <div className="sobre-mi-habilidades-librerias">
        <h2 className="sobre-mi-habilidades-titulo">Librerias</h2>
          <div className="sobre-mi-habilidades-iconos">
            {icons.libraries.map((icon,i)=>{
              return <Iconos key={icon.id} src={icon.src} nombre={icon.name} />
            })}
          </div>
        </div>
        <div className="sobre-mi-habilidades-librerias">
          <h2 className="sobre-mi-habilidades-titulo">Tecnologias</h2>
          <div className="sobre-mi-habilidades-iconos">
            {icons.technologies.map((icon,i)=>{
              return <Iconos key={icon.id} src={icon.src} nombre={icon.name} />
            })}
          </div>
        </div>
      </div>
    </article>
  );
};
