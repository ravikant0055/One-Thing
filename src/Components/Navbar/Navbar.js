import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

  const[Mobile, setMobile] = useState(false);
  return (
    <nav className='mynav'>
       
       <div className='menuToggle' >
          <button onClick={() => setMobile(!Mobile)}>
            {Mobile?<ion-icon className="menuBtn" name="close-outline"></ion-icon>: <ion-icon className="closeBtn" name="menu-outline"></ion-icon>} 
            </button>
        </div>
      

        <div className='logo'>
            <h1>AFC Inc.</h1>
        </div>
      

        <div className='group'>
            <ul className={Mobile?'nav-link-mobile':'nav-link'} onClick={()=>setMobile(false)}>
              <li><Link to="/">Track Application</Link></li>
              <li><Link to="/">Manage My Card</Link></li>
              <li><Link to="/">FAQs</Link></li>
            </ul>
            
        </div>
     

        <div className='cartToggle'>
           <button>Get Started</button> 
        </div> 
 
        
       
    </nav>
  )
}

export default Navbar