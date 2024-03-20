import React from "react";

export const Icon = (props) => {
  return (
    <li className="aside-footer-item">
      <a className="aside-footer-link" href={props.href} target="_blank"  >
        <img className="aside-footer-icono" src={props.src} alt={props.alt} />
      </a>
    </li>
  );
};
