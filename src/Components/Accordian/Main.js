import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Main = ({question,answer}) => {
    const[show, setShow] = useState(false);
    useEffect(()=>{
      AOS.init({duration:2000});
     },[]);
  return (
    <div data-aos="fade-up" className='mm'>
        <div className='questions-con'>
          <h3>{question}</h3>
          <p onClick={()=>setShow(!show)}>
          <i class="fa-solid fa-chevron-up fa-flip-both" style={{ transform: `rotate(${show ? 180 : 0}deg)`,transition: "all 0.25s",}}></i>
          </p>
          
        </div>
          { show && <p className='answers'>{answer}</p> }
          <hr/>
    </div>
  )
};

export default Main;