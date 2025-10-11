import '../styles/index.css';
function Footer() {
  return (
    <footer>
      <div className="left-side-container">
        <div className="footer-heading-title">
          <h3 className="footer-title">Available for select freelance opportunities</h3>
        </div>
        <div className="footer-text">
          <p>
            Have an exciting project you need <br />
            help with? <br />
            Send me an email or contact me via <br />
            instant message!
          </p>
        </div>
        <span className="espace-container"></span>
        <div className="footerLinks">
          <a
            className="email-footer-style"
            aria-label="Enovoyer un mail à Frantz"
            href="mailto:frantz.o@icloud.com?subject=Demande%20de%20collaboration&body=Bonjour%20Frantz,"
          >
            frantz.o@icloud.com
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/frantz-tech/" rel="noopener noreferrer">
            {' '}
            LinkedIn
          </a>
          <a href="#Instagram"> Instagram</a>
          <a target="_blank" href="https://github.com/Frantz-tech" rel="noopener noreferrer">
            {' '}
            GitHub
          </a>
        </div>
      </div>
      <div className="right-side-container">
        <div className="elementor-left-footer">
          <p className="elementor-left-footer-text">
            Merci de votre visite ! <br />
            Passionné par le développement web et la création d’expériences digitales, je suis toujours en quête de
            nouveaux défis qui me permettent d’apprendre, de progresser et de collaborer avec des personnes inspirantes.{' '}
            <br />
            J’aime donner vie à des idées, transformer une maquette en une interface fluide et intuitive, et voir un
            projet prendre forme ligne après ligne.
            <br />
            Aujourd’hui, je suis ouvert à de nouvelles opportunités, qu’il s’agisse de collaborations, d’alternances ou
            de projets ambitieux.
            <br /> 👉 Si vous recherchez quelqu’un de curieux, rigoureux et impliqué, n’hésitez pas à me contacter.
          </p>
        </div>
        <div className="elementor-right-footer">
          <p className="elementor-right-footer-text">
            Ce qui me motive le plus, c’est l’apprentissage continu. Le web évolue sans cesse, et c’est précisément ce
            qui me passionne : expérimenter de nouvelles technologies, affiner mes compétences en front-end et découvrir
            des façons toujours plus efficaces de concevoir des produits utiles et agréables à utiliser.
          </p>
          <p className="elementor-right-bottom-footer-text">
            J’attache aussi beaucoup d’importance à l’esprit d’équipe. Travailler aux côtés de personnes motivées,
            échanger des idées, apprendre des autres et partager mes connaissances sont pour moi les clés d’un
            environnement de travail stimulant et créatif.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
