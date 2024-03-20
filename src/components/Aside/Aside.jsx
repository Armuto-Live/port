import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import { Icon } from './Icon';

export const Aside = () => {
  return (
    <aside className="aside">
      <header className="aside-header">
        <h1 className="aside-header-logo">L/A</h1>
      </header>
      <main className="aside-contenido">
        <h2 className="aside-contenido__titulo especialidad">Front End Developer</h2>
      </main>
      <footer className="aside-footer">
        <ul className="aside-footer-lista">
          <Icon src={linkedin} alt='linkedin' href={'https://github.com/Armuto-Live'}/>
          <Icon src={github} alt='github' href={'https://github.com/Armuto-Live'}/>
        </ul>
      </footer>
    </aside>
  );
};
