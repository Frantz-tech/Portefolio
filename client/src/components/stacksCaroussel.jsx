/* eslint-disable no-unused-vars */
import { aboutMeRef } from './main/aboutMe';

import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/caroussel.css';

const logoContext = require.context('../assets/svg', false, /\.svg$/);
const logos = logoContext.keys().map(logoContext);
const scrollToAboutMe = () => {
  aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
};

function Caroussel() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    s.type = 'module';
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <>
      <div className="containerCaroussel">
        <div className="carousselTitle">
          <p> What I work with</p>
        </div>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          initialSlide={5}
          spaceBetween={25}
          slidesPerGroup={1}
          centeredSlides={false}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} className="caroussel-elementor" alt="Stack logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container-loop-animation" onClick={scrollToAboutMe}>
        <dotlottie-player
          src="https://lottie.host/f5e93eba-399b-44b4-b3f0-58406fdca316/5Uqzr9Uc6a.lottie"
          background="transparent"
          speed="1"
          style={{ width: 60, height: 60 }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </>
  );
}
export default Caroussel;
