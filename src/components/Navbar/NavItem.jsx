import React from "react";

export const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href={props.href} className="nav-link">
        <img className="nav-link-imagen" src={props.imagen} alt="" />
        <p className="nav-link__text">{props.texto}</p>
      </a>
    </li>
  );
};
