import { useEffect, useState } from 'react';
import '../../styles/index.css';

function ButtonGoUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toogleVisibility = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toogleVisibility);
    return () => window.removeEventListener('scroll', toogleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button className="btnGoUp" onClick={scrollToTop}>
        {'↑'}
      </button>
    )
  );
}
export default ButtonGoUp;
