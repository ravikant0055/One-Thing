import React, { useEffect, useState } from 'react'
import {data} from './data';
import Main from './Main';
import './FaqS.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FaqS = () => {
    const[mydata, setData] =useState(data);
    useEffect(()=>{
      AOS.init({duration:2000});
     },[]);
  return (
    <div className='main-acc'>
         <h1 data-aos="fade-up" >FAQs</h1>
        {
         mydata.map((item)=>{
           return <Main  key={item.id} {...item} />;
        })
        }
    </div>
  )
}

export default FaqS