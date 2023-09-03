import React, { useState } from 'react'
import './Dropdown.css';
const Dropdown = ({selected,setSelected}) => {
    const[active, setActive] = useState(false);
    const options = ['Delhi', 'Ghaziabad', 'Goa', 'Noida']

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // } 

  return (
    <div className='drop-cont'>
        <div className='drop-btn' onClick={(e)=>setActive(!active)}>
         {selected}
         <i class="fa-solid fa-chevron-up fa-flip-both" style={{ transform: `rotate(${active ? 180 : 0}deg)`,transition: "all 0.25s",}}></i>
            {/* <select className='slect-con' onChange={handleChange}>
                {options.map(item=>{
                   <item value={item.value}>{item.label}</item>
                })}
            </select> */}
        </div>
        
        { active && (
            <div className='drop-opt'>
               {options.map((item)=>(
                  <div onClick={(e)=>{ 
                    setSelected(item); 
                    setActive(false)}} 
                    className='drop-item'
                    >
                      {item}
                  </div>
               ))}
            </div>
        )}
    </div>
  );
};

export default Dropdown;