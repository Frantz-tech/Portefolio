/* eslint-disable no-unused-vars */
import logoTwitter from '../../assets/twitter.png';
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
            logo={logoTwitter}
            parag={'Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.'}
          />
          <BlockExpertise
            title={
              <>
                <span className="title-line-one"> Fullstack Dev</span>
                <br />
                <span className="title-line">React, NextJs</span>
              </>
            }
            logo={logoTwitter}
            parag={
              'Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.'
            }
          />
          <BlockExpertise
            title={
              <>
                <span className="title-line-one">Flutter Dev</span>
                <br />
                <span className="title-line">Android, iOS</span>
              </>
            }
            logo={logoTwitter}
            parag={
              'Very skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.'
            }
          />
        </div>
      </section>
    </>
  );
}

export default Expertise;
