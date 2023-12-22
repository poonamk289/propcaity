
import React, { useContext, useState } from 'react'
import './../index.css';

import { IoIosColorPalette } from "react-icons/io";

import './extra.css';
const SingleIcon=({setPartColor})=> {

    
    const [hide,SetHide] = useState("none");
    const updateColor=(e)=>{
            // console.log(e.target.style.background);
            setPartColor(e.target.style.background);
            SetHide("none");
    }
    // console.log(partcolor);

    const openPalette=()=>{
        if(hide==="none"){
            SetHide("block");
        }else{
            SetHide("none");  
        }
        console.log(hide);
    }
  return (
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
  )
}

export default SingleIcon