import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Bestchoice = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData:require( "./card1.json"),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    useEffect(()=>{
      AOS.init({duration:2000});
     },[]);
  return (
    <div className='free-con'>
  
        <div  data-aos="fade-right"  className='free-slid'>
          <h2 style={{fontSize:'1.9rem'}}>Why the OneSync Card is the Best Choice for you?</h2>
          <p  >You can create a Credit Card that fits all
             your needs on vour own. Gone are the
             days when you had choose from
             premade credit cards with features that
            you did not need.</p>
          <div className='drop-con' style={{display:'block'}}>   
          <p>With the OneSync card you can save on
             all the things that you love to do with a
             unique personal touch</p>
          <a href=''>Get started</a> 
          </div>
        </div>

        <div className='free-text'>
          <div  className='animation-container'>
           <Lottie  options={defaultOptions} height={300} width={400}/>
          </div>
        </div>
    </div>
  )
};

export default Bestchoice;