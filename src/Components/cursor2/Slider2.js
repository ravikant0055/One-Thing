import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider2.css';
const Slider2 = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`./imgs/cc${i + 1}.png`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
      };
  return (
    <div className='maincls' >
    <Slider {...settings}>
          <div className='con'>
            <img className='imgs' alt='card' src={"./imgs/cc1.png"} />
            
          </div>
          <div className='con'>
            <img className='imgs' alt='card' src={"./imgs/cc2.png"} />
          
          </div>
          <div className='con'>
            <img className='imgs'  alt='card' src={"./imgs/cc3.png"} />
           
          </div>
          <div className='con'>
            <img className='imgs' alt='card' src={ "./imgs/cc1.png"} />
           </div>
        </Slider>
    </div>
  )
};

export default Slider2;