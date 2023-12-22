import React, { useContext, useState } from 'react'
import './../index.css';
import { MdDisplaySettings, MdNotificationAdd } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaRegImage } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import './extra.css';

import MyContext from './../Context/MyContext';
const ExtraIcons=()=> {
   const {color,setColor} = useContext(MyContext);
   const [hide,SetHide] = useState("none");
   const updateColor=(e)=>{
        // console.log(e.target.style.background);
        setColor(e.target.style.background);
        SetHide("none"); 
   }
   console.log(color);

   const openPalette=()=>{
    if(hide==="none"){
        SetHide("block");
    }else{
        SetHide("none");  
    }
    console.log(hide);
   }
//    const changePalette=()=>{
//         SetHide("block");
//    }
  return (
    <div className='textarea-icons' >
    <div>
    <span><MdNotificationAdd /></span>
    </div>
    <div>
    <span><FaUserPlus /></span>
    </div>
    <div className='color-div' >
        <span onClick={openPalette}><IoIosColorPalette /></span>
        <div className={`colorp ${hide}`} >
            <div className='d-colors' style={{background:"white",border:"1px solid grey"}} onClick={updateColor} ></div>
            <div className='d-colors' style={{background:"coral",}} onClick={updateColor}></div>
            <div className='d-colors' style={{background:"aquamarine",}} onClick={updateColor}></div>
            <div className='d-colors' style={{background:"rgb(244, 244, 107)",}} onClick={updateColor}></div>
            <div className='d-colors' style={{background:"rgb(124, 231, 124)",}} onClick={updateColor}></div>
            <div className='d-colors' style={{background:"rgb(241, 182, 241)",}} onClick={updateColor}></div>
            <div className='d-colors' style={{background:"rgb(176, 127, 127)",}} onClick={updateColor}></div>
            {/* <div className='d-colors' style={{background:"rgb(162, 162, 230)",}} ></div> */}
            {/* <div className='d-colors' style={{background:"rgb(214, 77, 77)",}} ></div> */}
        </div>
        
    </div>
    <div>
    <span><FaRegImage /></span>
    </div>
    <div>
    <span><MdOutlineArchive /></span>
    </div>
    <div>
    <span><HiDotsVertical /></span>
    </div>
    <div>
    <span><LuUndo2 /></span>
    </div>
    <div>
    <span><LuRedo2 /></span>
    </div>
       
    </div>
  )
}

export default ExtraIcons