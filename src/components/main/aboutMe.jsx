import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import codePic from '../../assets/htmlTextEnFond.png';
import bitmojiImg from '../../assets/IMG_4027-removebg-preview.png';
import whereIlive from '../../assets/whereIleave.png';
import '../../styles/aboutMe.css';
export const aboutMeRef = { current: null };

function AboutMe() {
  useEffect(() => {
    const map = document.querySelector('.map');
    if (!map) return;

    const handleclick =
      ('click',
      () => {
        window.open(
          "https://www.google.fr/maps/place/19+Rue+du+Lion+d'Or,+59140+Dunkerque/@51.0319043,2.3704021,17z/data=!3m1!4b1!4m6!3m5!1s0x47dc8c7d10b5266d:0x203eb40f99b43ed7!8m2!3d51.031901!4d2.372977!16s%2Fg%2F11c2bm8dl0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
          '_blank'
        );
      });

    map.addEventListener('click', handleclick);
    return () => map.removeEventListener('click', handleclick);
  }, []);

  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ['Bonjour !', "Je m'appelle Frantz", 'Bienvenue sur mon site'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      cursorChar: '_',
      onStringTyped: function (arrayPos, self) {
        if (arrayPos === self.strings.length - 1) {
          setTimeout(() => {
            self.cursor.remove();
          }, 500);
        }
      },
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <section className="about-me" ref={el => (aboutMeRef.current = el)}>
        <h2>About me</h2>
        <div className="container-about-me">
          <div className="about-me-parag">
            <div className="bitmoji-img">
              <img className="bitmoji" src={bitmojiImg} alt="bitmoji" />
            </div>
            <div className="herop">
              <p className="bvn" ref={typedRef}></p>
            </div>
            <p>
              Passionné par le code, je suis à la fois <br />
              efficace et rigoureux.
              <br />
              Mon désir constant de perfection et mon engagement à fournir des résultats de qualité font de moi un
              développeur accompli, toujours prêt à apprendre et à repousser mes limites.
            </p>
          </div>
          <div className="about-me-city">
            <img src={whereIlive} alt="where I live" className="map" />
          </div>
          <div className="bg-html">
            <img src={codePic} alt="html en fond" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
