import { scrollToContactRef, scrollToExpertiseRef, scrollToWorkRef } from './header';

export function MenuBurger({ openMenu, toggleMenu }) {
  return (
    <div className={`containerBurger ${openMenu ? 'active' : ''}`}>
      <div className="closeBtnBurger" onClick={toggleMenu}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="hiddenMenu">
        <ul className="hiddenMenuList">
          <li>
            <a className="burgerLink" href="#home" onClick={toggleMenu}>
              {' '}
              // home
            </a>
          </li>
          <li>
            <a
              className="burgerLink"
              href="#exp"
              onClick={() => {
                toggleMenu();
                setTimeout(() => {
                  scrollToExpertiseRef();
                }, 300);
              }}
            >
              {' '}
              // expertise
            </a>
          </li>
          <li>
            <a
              className="burgerLink"
              href="#work"
              onClick={() => {
                toggleMenu();
                setTimeout(() => {
                  scrollToWorkRef();
                }, 300);
              }}
            >
              {' '}
              // work{' '}
            </a>
          </li>
          <li>
            <a
              className="burgerLink"
              href="#contact"
              onClick={() => {
                toggleMenu();
                setTimeout(() => {
                  scrollToContactRef();
                }, 300);
              }}
            >
              {' '}
              // contact
            </a>
          </li>
        </ul>
        <div className="copyright">
          © 2021. Made with passion by
          <a className="burgerLink" href="#" target="_blank">
            {' '}
            TenIsro
          </a>
          . <br />
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
