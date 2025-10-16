/* eslint-disable no-unused-vars */
import bdd from '../../assets/bdd.png';
import ecran from '../../assets/ordinateur.png';
import reactLogo from '../../assets/svg/icons8-react.svg';
import '../../styles/expertise.css';
import AnimationLogo from '../animationLogo';
import BlockExpertise from './expertiseBlock';

export const expertiseRef = { current: null };

function Expertise() {
  return (
    <>
      <section className="expertise">
        <h2 ref={expertiseRef}>My Expertise</h2>

        <div className="AnimationLogo">
          <AnimationLogo />
        </div>
        <div className="container-expertise">
          <BlockExpertise
            title={
              <>
                <span className="title-line-one"> Software</span>
                <br />
                <span className="title-line">Developpement</span>
              </>
            }
            logo={ecran}
            parag={
              'Familiar with Python and experienced in object-oriented programming with JavaScript and TypeScript.'
            }
          />
          <BlockExpertise
            title={
              <>
                <span className="title-line-one"> Fullstack Dev</span>
                <br />
                <span className="title-line">React, NextJs</span>
              </>
            }
            logo={reactLogo}
            parag={
              'Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.'
            }
          />
          <BlockExpertise
            title={
              <>
                <span className="title-line-one">Server & </span>
                <br />
                <span className="title-line">Database</span>
              </>
            }
            logo={bdd}
            parag={'Experienced in Node.js and MySQL development, creating stable APIs and managing data effectively.'}
          />
        </div>
      </section>
    </>
  );
}

export default Expertise;
