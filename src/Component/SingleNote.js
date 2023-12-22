import React, { useContext, useState } from 'react'
import './note.css';
import { MdDeleteOutline } from "react-icons/md";
import MyContext from '../Context/MyContext';
import ExtraIcons from './ExtraIcons';
import SingleIcon from './SingleIcon';
import { MdEdit } from "react-icons/md";
function SingleNote({note,updateObjectInLocalStorage,deleteObjectFromLocalStorage}) {
  console.log(note);
  
  const [visible,setVisible] = useState("");
  const [etitle,setEtitle] = useState(note.title);
  const [econtent,setEcontent] = useState(note.content);
  const [partColor,setPartColor] = useState(note.color);
  const updateValue=()=>{
    if(visible===""){
      setVisible("jjj");
    }else{
      setVisible("");
    }
    
  }
  const updateObject=()=>{
      setVisible("");
      const changeobj = {...note,title:etitle,content:econtent,color:partColor}
      updateObjectInLocalStorage(changeobj);
  }

  const deleteObject =()=>{
    deleteObjectFromLocalStorage(note.sno);
    console.log(note.sno)
  }
 
  return (
    <div className='note' style={{backgroundColor:partColor}}>
        {/* <h1>{index}</h1> */}
        {!visible && <h1>{note.title}</h1>}
        {visible && <input type='text'placeholder='title' className='edit-title' value={etitle} onChange={(e)=>(setEtitle(e.target.value))}/>}
        {!visible &&<p>{note.content}</p>}
        {visible && <textarea type='text'placeholder='title' className='edit-content' value={econtent} onChange={(e)=>(setEcontent(e.target.value))}/>}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <SingleIcon  setPartColor={setPartColor}/>
            {visible&& 
              <button className='btn' onClick={updateObject}>Save
              </button>
            }
            {!visible && 
              <div>
              <button className='btn' >
                  <MdDeleteOutline onClick={deleteObject} />
              </button>
              <button className='btn' style={{backgroundColor:"lightgreen" ,marginRight:"10px"}} onClick={updateValue}>
              <MdEdit />
              </button>
            </div>
            }
            
        </div>

 </div>
  )
}

export default SingleNote