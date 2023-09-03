import React, { useEffect } from 'react';
import Cursor from '../cursor/Cursor';
import './Reward.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Reward = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
   },[]);
  return (
    <div className='re-con'>
        <div data-aos="fade-right" className='re-text'>
           <i class="fa-solid fa-ranking-star"></i>
           <h2 >Choose Your Rewards</h2>
           <p >Match your card to your lifestyle. We've got
              benefits from across brands &amp; categories for
              you to choose from. Each benefit has an
              attached fee. Just add the ones you like to
              your card.</p>
            <a  href=''>Get started</a>  
        </div>
        <div className='re-slide'>
           <Cursor/>
        </div>
    </div>
  )
};

export default Reward;