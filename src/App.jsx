import "./global/Estilo.css";
import {
  Aside,
  Navbar,
  Presentación,
  SobreMi,
  Proyectos,
  Contacto,
  Experiencia,
} from "./components";
import { Linea } from "./components/Linea";

function App() {
  return (
    <>
      <div id="inicio" className="container">
        <Navbar />
        <main className="main">
          <section className="principal">
            <Aside />
            <Presentación />
          </section>
          <Proyectos />
          <Linea />
          <Experiencia />
          <Linea />
          <SobreMi />
          <Linea />
          <Contacto />
        </main>
        <footer className="footer">@Luis Armuto - © 2021 All Rights Reserved</footer>
      </div>
    </>
  );
}

export default App;
