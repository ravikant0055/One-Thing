import React,{useEffect, useState} from 'react';
import Dropdown from './Dropdown';
import './Freedom.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Freedom = () => {
    const [selected, setSelected] = useState('Select City');
    useEffect(()=>{
      AOS.init({duration:2000});
     },[]);
  return (
    <div className='free-con'>
        <div className='free-text'  data-aos="fade-up">
          <h2>The Freedom to Create</h2>
          <h2>The Credit Card You Want</h2>
        </div>
        <div className='free-slid' data-aos="fade-left">
          <p>That's why it comes with benefits &amp; rewards chosen by you.
             Available in multiple designs, your card comes in a style selected by
             you. You can come back each year, to edit your benefits or update
             your style.</p>

          <div className='drop-con'>   
          <p>Your OneSync Credit Card stays true to you, year after year. It's the
             only card vou'll ever need.</p>
          <a href=''>Get started</a> 
          </div>

          <div className='mydrop'>
                <p>
                Check if the card is available in your city 
                </p>
                <div className='drop-cls'>
                  <Dropdown selected={selected} setSelected={setSelected}/>
                  <button>Go</button>
                </div>
          </div>
        </div>
    </div>
  )
};

export default Freedom;