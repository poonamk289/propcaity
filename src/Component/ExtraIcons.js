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

import MyContext from '../Context/MyContext';
function ExtraIcons({value}) {
    const {color,setColor} = useContext(MyContext);
    const [hide,setHide] = useState("hide");
    const changeColor = (e)=>{
        console.log(e.target.style.background);
        console.log(color);
        setColor(`${e.target.style.background}`);
    }
    const updateshow=(e)=>{
        setHide("");
        console.log(e.target);
    }
  return (
    <div className='textarea-icons'>
    <div>
    <span><MdNotificationAdd /></span>
    </div>
    <div>
    <span><FaUserPlus /></span>
    </div>
    <div className='color-div'>
        <span><IoIosColorPalette /></span>
        <div className={`colorp`}  style={{display:value}}>
            <div style={{background:"coral",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div>
            <div style={{background:"aquamarine",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div>
            <div style={{background:"rgb(244, 244, 107)",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div>
            <div style={{background:"rgb(124, 231, 124)",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div>
            <div style={{background:"rgb(241, 182, 241)",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div>
            <div style={{background:"rgb(176, 127, 127)",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div>
            {/* <div style={{background:"rgb(162, 162, 230)",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div> */}
            {/* <div style={{background:"rgb(214, 77, 77)",padding:"1rem",borderRadius:"50%"}} onClick={changeColor}></div> */}
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