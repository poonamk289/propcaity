import React, { useContext, useEffect, useRef, useState } from 'react'
import { TbChecklist } from "react-icons/tb";
import { IoMdBrush } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

import MyContext from './Context/MyContext';
import ExtraIcons from './Component/ExtraIcons';

function Notes({view}) {
console.log(view);
    const {value,update,color,setColor} = useContext(MyContext);
    const [hide,setHide] = useState("hide");
    const [input,setInput] = useState("");
    const [textarea,setTextarea] = useState("");
    const [placeholder,setPlaceholder] = useState("Create note");
    const [count,setCount] = useState(1);
    
    const [message,setMessage] = useState([]);
    ///----------------------------------------------------
   
      //=================================================
    const opentextarea=()=>{
     setHide("show");
     setPlaceholder("Title");
    }
    const closetextarea=(e)=>{
        e.stopPropagation();
        if(input!=="" ){
                console.log(input);
                // show 
        }
       
    }
    useEffect(()=>{
            const existingarrayString = localStorage.getItem("notesArray");
            const existingArray = []
            // existingarrayString?JSON.parse(existingarrayString):[];
           console.log(existingArray);
            existingArray.push(...message);

            localStorage.setItem("notesArray",JSON.stringify(existingArray));
            update(prev=>prev+1);
        
    },[message])
        
    const addingnote=()=>{
        console.log(input,textarea);
        const obj =  {"sno":count,"title":input,"content":textarea};
        setMessage(prev=>[...prev,obj]);
        console.log(message);
       console.log(color);
       setCount(count+1);
       setInput("");
       setTextarea("");
       setColor("white");
       setHide("hide");
    } 
  return (
    <div  className="add-note" >
       <div className='add-div' 
       
        style={{backgroundColor:`${color}`}} >
        <div className="create_note" onClick={opentextarea} >
            <input type="text"   placeholder ={`${placeholder}`} autoComplete='off' onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <div><TbChecklist /></div>
            <div><IoMdBrush /></div>
            <div>  <CiImageOn /></div>      
        </div>
        <div className={`textarea ${hide}`}>
            <textarea name='Create note' rows="" cols=""   placeholder='Create note' onChange={(e)=>{
                setTextarea(e.target.value)
            }}/>
           
                <ExtraIcons/>
                    <span><button onClick={addingnote} >Done</button></span>
            
        </div>
        </div>
    </div>
  )
}

export default Notes;
