import React, { useEffect } from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
   },[]);
  return (
    <footer>
     
      <div data-aos="zoom-in" className='section-1'>  
            <h2>OneSync Credit Card</h2>
            <p>Experience Freedom</p>
            <button>Get Started</button>
      </div>
      
      <hr></hr>

    <div className='section-2'>
       <div className='list-1'>
       <h4>Manage Your Card</h4> 
       <ul>
          <li><Link to="/">Smart Credit Cards</Link></li>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">Commercial</Link></li>
          <li><Link to="/">DigiLocker Card</Link></li>
          <li><Link to="/">Capital on Shopping</Link></li>
          <li><Link to="/">Visa Card</Link></li>
          <li><Link to="/">CreditWise</Link></li>
       </ul>
       </div>

      <div className='list-1'>
      <h4>Track Your Application</h4> 
      <ul>
          <li><Link to="/">Smart Credit Cards</Link></li>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">Commercial</Link></li>
          <li><Link to="/">DigiLocker Card</Link></li>
          <li><Link to="/">Capital on Shopping</Link></li>
          <li><Link to="/">Visa Card</Link></li>
          <li><Link to="/">CreditWise</Link></li>
       </ul>
        </div>

        <div className='list-1'>
        <h4>HELP</h4> 
        <ul>
          <li><Link to="/">Smart Credit Cards</Link></li>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">Commercial</Link></li>
          <li><Link to="/">DigiLocker Card</Link></li>
          <li><Link to="/">Capital on Shopping</Link></li>
          <li><Link to="/">Visa Card</Link></li>
          <li><Link to="/">CreditWise</Link></li>
       </ul>
        </div>

        <div className='list-1'>
        <h4>Contact Us</h4> 
        <ul>
          <li><Link to="/">Smart Credit Cards</Link></li>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">Commercial</Link></li>
          <li><Link to="/">DigiLocker Card</Link></li>
          <li><Link to="/">Capital on Shopping</Link></li>
          <li><Link to="/">Visa Card</Link></li>
          <li><Link to="/">CreditWise</Link></li>
       </ul>
        </div>
      </div>

    </footer>

  );
};

export default Footer;