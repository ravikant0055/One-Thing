import React, { useEffect } from 'react';
import './FillForm.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FillFrom = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
   },[]);
  return (
    <div className='f-con'>
        <h1 >Create your own credit card in three easy steps</h1>
        <div className='f-slide'>
          <ul data-aos="fade-up">
            <li>Enter your number</li>
            <li>Enter your PAN number</li>
            <li>Enter your Address</li>
          </ul>
        </div>

        <div data-aos="fade-left" className='f-text'>
        <i  class="fa-solid fa-file-lines"></i>
        <h2>Fill Eligibility Form</h2>
        <p >Please fill an application form to make sure
           you're eligible for the card. You can fill this
           later as well</p>
         <a href=''>Get started</a>  
         </div>
    </div>
  )
};

export default FillFrom;