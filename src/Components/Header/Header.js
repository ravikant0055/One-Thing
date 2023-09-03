import React, { useEffect } from 'react';
import mypic from '../../assests/gif.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css";
const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
   },[]);
  return (
    <div className="header-container">

      {/* Header Content */}
      <div className="header-content">
        <h2>Build a Credit Card</h2>
        <h2>That is Definitely Yours</h2>
        <p>With the OneSync Credit Card you can customise you card the you want.
        </p>
        <button className='hire-button'>Get Started</button>
      </div>
      
      {/* Image Content */}
      <div className="profile-img-container">
       <img data-aos="zoom-in" src={mypic} alt='mypic'/>
      </div>

    </div>
  );
};

export default Header;