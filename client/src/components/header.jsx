/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import logo from '../assets/ti.png';
import '../styles/header.css';
import '../styles/index.css';
import { MenuBurger } from './burgerMenu';
import { contactRef } from './main/contact';
import { expertiseRef } from './main/expertise';
import { projectRef } from './main/projects';
export const scrollToExpertiseRef = () => {
  expertiseRef.current?.scrollIntoView({ behavior: 'smooth' });
};
export const scrollToContactRef = () => {
  contactRef.current?.scrollIntoView({ behavior: 'smooth' });
};
export const scrollToWorkRef = () => {
  projectRef.current?.scrollIntoView({ behavior: 'smooth' });
};
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.3) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <div className="background">
        <div className="bgcalq"></div>
      </div>

      {/* Nav de base */}
      <nav className="nav">
        <div className={`burgerMenu ${openMenu ? '' : 'hidden'}`} onClick={toggleMenu}>
          <span>☰</span>{' '}
        </div>

        <a href="#logo">
          <img className="grp1" src={logo} alt="logopng" />
        </a>
        <ul className="linka">
          <li>
            <a href="#home" onClick={scrollToTop}>
              // home
            </a>
          </li>
          <li>
            <a href="#exp" onClick={scrollToExpertiseRef}>
              // expertise
            </a>
          </li>
          <li>
            <a href="#work" onClick={scrollToWorkRef}>
              // work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContactRef}>
              // contact
            </a>
          </li>
        </ul>
      </nav>

      <MenuBurger openMenu={openMenu} toggleMenu={toggleMenu} />

      {/* Placeholder pour la nav sticky */}
      {/* {sticky && <div style={{ height: '80px' }}></div>} */}

      {/* Nav sticky avec blur */}
      <nav className={`navSticky ${sticky ? 'active' : ''}`}>
        <a href="#logo">
          <img className="grp1" src={logo} alt="logopng" />
        </a>
        <ul className="linka">
          <li>
            <a href="#home" onClick={scrollToTop}>
              // home
            </a>
          </li>
          <li>
            <a href="#exp" onClick={scrollToExpertiseRef}>
              // expertise
            </a>
          </li>
          <li>
            <a href="#work" onClick={scrollToWorkRef}>
              // work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContactRef}>
              // contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
