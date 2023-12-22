import React, { useState } from "react";
import { SiGooglekeep } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { IoRefresh } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
import { CiGrid41 } from "react-icons/ci";
import { MdGridOn } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { CiGrid2H } from "react-icons/ci";
import './Component/note.css';
import './App.css';

function Header({view,setView,setSearch}) {
    const [hide,SetHide] = useState("none");
    const changeView=()=>{
        if(view==="grid"){
        setView("flex");
        }else{
          setView("grid");
        }
      }
  const openNavBar=()=>{
    if(hide==="none"){
        SetHide("block");
    }else{
        SetHide("none");  
    }
    console.log(hide);
  }
  return (
 <div>
    <div className="header">
        
        <div style={{display:"flex",alignItems:"center"}}>
            <div className="nav-open" onClick={openNavBar}> <HiMenu  style={{fontSize:"30px"}}/></div>
            <SiGooglekeep  style={{color:"orange" ,fontSize:"50px"}}/>
            <h2>Google-Keep-Clone</h2>
        </div>
       
           <input type="text" placeholder="Search" className="search-input" onChange={(e)=>{setSearch(e.target.value)}}/>
        <div className="right-icons">
            <div><IoRefresh /></div>
            <div onClick={changeView}>
               {(view==="flex") && <CiGrid41 />} 
               {(view!=="flex") && <CiGrid2H />} 
            </div>
            <div><IoSettingsOutline /></div>
            <div><MdGridOn /></div>

        </div>
        </div>
            <hr/>

       <div className="drop-down">
            <div><IoBulbOutline /><span className={`nav ${hide}`} >Notes</span></div>
            <div><IoNotifications /><span className={`nav ${hide}`} >Reminder</span></div>
            <div><FaRegEdit /><span className={`nav ${hide}`} >EditNote</span></div>
            <div><MdOutlineArchive /><span className={`nav ${hide}`}>Archive</span></div>
            <div><MdDeleteSweep /><span className={`nav ${hide}`} >Trash</span></div>
       </div>

</div>
  )
}

export default Header;