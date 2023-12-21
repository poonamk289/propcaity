import React from "react";
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
function Header({setView,view}) {
  const changeView=()=>{
    if(view){
    setView("");
    }else{
      setView("flex");
    }
  }
  return (
 <div>
    <div className="header">
        
        <div style={{display:"flex",alignItems:"center"}}>
             <HiMenu  style={{fontSize:"30px"}}/>
            <SiGooglekeep  style={{color:"orange" ,fontSize:"50px"}}/>
            <h2>Google-Keep-Clone</h2>
        </div>
       
           <input type="text" placeholder="Search" className="search-input"/>
        <div className="right-icons">
            <div><IoRefresh /></div>
            <div onClick={changeView}>
              {view &&<CiGrid41 />}
              {!view && <CiGrid2H />}
              
              </div>
            <div><IoSettingsOutline /></div>
            <div><MdGridOn /></div>

        </div>
        </div>
            <hr/>

       <div className="drop-down">
            <div><IoBulbOutline /><span className="nav">Notes</span></div>
            <div><IoNotifications /><span className="nav">Reminder</span></div>
            <div><FaRegEdit /><span className="nav">EditNote</span></div>
            <div><MdOutlineArchive /><span className="nav">Archive</span></div>
                <div><MdDeleteSweep /><span className="nav">Trash</span></div>
       </div>

</div>
  )
}

export default Header;