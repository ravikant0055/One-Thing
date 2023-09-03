import React from 'react';
import a from '../../assests/a.jpg'; 
import b from '../../assests/b.jpg'; 
import c from '../../assests/c.jpg'; 
import d from '../../assests/d.jpg'; 
import e from '../../assests/e.jpg'; 


// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Cursor.css';
const Cursor = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        arrows:false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='cur-con'>

     <Slider {...settings}>
        <div className='sild'>
            <img src={a} alt='img1' className='cur'/>
        </div>
        <div className='sild'>
           <img src={b} alt='img2' className='cur' />
        </div>
        <div className='sild'>
            <img src={c} alt='img3' className='cur' />
        </div>
        <div className='sild'> 
            <img src={d} alt='img4' className='cur' />
        </div>
        <div className='sild'> 
            <img src={e} alt='img5' className='cur' />
        </div>
      </Slider>    
    </div>
  )
};

export default Cursor;