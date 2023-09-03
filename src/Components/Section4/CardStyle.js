import React, { useEffect } from 'react'
import Cursor from '../cursor/Cursor'
import Slider2 from '../cursor2/Slider2'
import AOS from 'aos';
import 'aos/dist/aos.css';
const CardStyle = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
   },[]);
  return (
    <div className='re-con card'>
    
    <div className='re-slide' style={{order:'1', backgroundColor:'rgb(248, 243, 255)'}}>
       <Slider2/>
    </div>

    <div  data-aos="fade-left" className='re-text'>
       <i  class="fa-solid fa-paint-roller"></i>
       <h2 >Select Your Style</h2>
       <p>Match your card to your personality. Whether
          you like a minimal look or something that
          catches everyone's eyes, we've got a style for
          you. You can update your style every year, for
          a small fee.</p>
        <a href=''>Get started</a>  
    </div>
</div>
  )
}

export default CardStyle