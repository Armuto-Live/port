import { NavItem } from "./NavItem";
import { useState } from "react";

import iconInicio from "../../assets/icons/inicio.svg";
import iconSobreMi from "../../assets/icons/sobre-mi.svg";
import iconEducacion from "../../assets/icons/educacion.svg";
import iconProyectos from "../../assets/icons/proyectos.svg";
import iconContacto from "../../assets/icons/contacto.svg";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const cambiarFondo = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", cambiarFondo);
  return (
    <header className={navbar ? "header sticky" : "header"}>
      <h1 className="header-logo">L/A</h1>
      <nav>
        <ul className="nav-items">
          <NavItem href="#inicio" texto="Inicio" imagen={iconInicio} />
          <NavItem href="#sobre-mi" texto="Sobre mi" imagen={iconSobreMi} />
          <NavItem href='#proyectos' texto="Proyectos" imagen={iconProyectos} />
          <NavItem href="#experiencia" texto="Experiencia" imagen={iconEducacion} />
          <NavItem texto="Contáctame" imagen={iconContacto} />
        </ul>
      </nav>
    </header>
  );
};
