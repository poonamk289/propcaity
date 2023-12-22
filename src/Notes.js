import React, { useContext, useEffect, useRef, useState } from 'react'
import { TbChecklist } from "react-icons/tb";
import { IoMdBrush } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import ExtraIcons from './Component/ExtraIcons';
import MyContext from './Context/MyContext';
import './App.css';
const Notes=()=> {
    const {color,setColor,message,setMessage} = useContext(MyContext);
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [placeholder,setPlaceholder] =useState("create note");
    const [hide,SetHide] = useState("none");
    console.log(message);

    useEffect(() => {
        // Load data from localStorage on component mount
        const storedData = JSON.parse(localStorage.getItem('notesArray'));
        if (storedData) {
          setMessage(storedData);
        }
      }, []);
    const addMessage=()=>{
        console.log(color);
        const obj ={"sno":message.length+1,"title":title,"content":content,"color":color};
        setMessage(prev=>[...prev,obj]);
        console.log(message);
        localStorage.setItem("notesArray",JSON.stringify([...message,obj]));

        setColor("white");
        setTitle("");
        setContent("");
        SetHide("none"); 
    }

    const openContent=()=>{
        if(hide==="none"){
            SetHide("flex");
        }else{
            SetHide("none");  
        }
        console.log(hide);
    }
  return (
    <div  className="add-note"  >
       <div className='add-div' style={{backgroundColor:color}}>
            <div className="create_note" onClick={openContent}>
                <input type="text"   placeholder ={placeholder} value={title} autoComplete='off' 
                onChange={(e)=>{setTitle(e.target.value);}}
                />
                <div><TbChecklist /></div>
                <div><IoMdBrush /></div>
                <div><CiImageOn /></div>      
            </div>
            <div className={`textarea ${hide}`}>
                <textarea name='Create note' rows="" cols="" value={content}  placeholder='Create note'
                 onChange={(e)=>{setContent(e.target.value);}}
                />
                <ExtraIcons/>
                <span
                    onClick={addMessage}
                ><button>Done</button></span>
            </div>
        </div>
    </div>
  )
}

export default Notes;
