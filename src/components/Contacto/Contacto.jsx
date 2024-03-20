import React from "react";

export const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <h2>Contactame</h2>
      <form action="#">
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Correo electrónico"
              id="email"
              className="item"
              autoComplete="off"
            />
            <p className="error-txt">Debes ingresar un correo electronico</p>
          </div>
          <div className="input-field field">
            <input
              type="text"
              placeholder="Asunto"
              id="name"
              className="item"
              autoComplete="off"
            />
            <p className="error-txt">Debes ingresar un asunto</p>
          </div>
          <div className="textarea-field field">
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              placeholder="Descripcion"
              className="item"
            ></textarea>
            <p className="error-txt">Debes ingresar una descripcion</p>
          </div>
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
};
