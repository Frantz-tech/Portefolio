/* eslint-disable no-unused-vars */
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/heroSection';
import Main from './components/main';
import Caroussel from './components/stacksCaroussel';
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Caroussel />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
}
export default App;
