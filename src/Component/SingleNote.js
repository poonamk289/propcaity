import React, { useContext, useState } from 'react'
import './note.css';
import { MdDeleteOutline } from "react-icons/md";
import MyContext from '../Context/MyContext';
import ExtraIcons from './ExtraIcons';
function SingleNote({index,sno,title,content,array1}) {
    const {color,update,value} = useContext(MyContext);

  
    const deleteObjectFromArray = (array, key, value) => {
        return array.filter(item => item[key] !== value);
      };
    const deletenote=(e)=>{
        console.log(e);
        console.log(sno,index);
        console.log(array1);
        const updatedArray = deleteObjectFromArray(array1,'sno',index);
        console.log(updatedArray);
        localStorage.setItem("notesArray",JSON.stringify(updatedArray));
        console.log(array1);
        update(prev=>prev+1);
    }
    // console.log(title);
    // console.log(content);
  return (
    <div className='note' style={{backgroundColor:`${color}`}}>
        {/* <h1>{index}</h1> */}
        <h1>{title}</h1>
        <p>{content}</p>
        <ExtraIcons value={"none"}/>
        <button className='btn' onClick={deletenote}>
            <MdDeleteOutline  />
        </button>

 </div>
  )
}

export default SingleNote