import React, { useContext, useEffect, useState } from 'react'
import './note.css';
import SingleNote from './SingleNote';
import MyContext from '../Context/MyContext';
function AllNotes({view}) {
    const [storedData,setStoredData] = useState([]);
    const {value,update} = useContext(MyContext);
    
    
    const array1 = JSON.parse(localStorage.getItem("notesArray"))||[];
    const updateArray = (arr)=>{
        array1=arr;
    }
    console.log(array1,storedData);
    
   
  return (
    <div className='container-note' style={{display:view,flexDirection:"column"}}>
        {
           array1 && array1.map((value,index)=>(
                <SingleNote index={index+1} sno={value.sno} title={value.title} content={value.content} array1={array1}
                    updateArray={updateArray}
                />
            ))
        }
       
        {/* <p>{value}</p> */}
    </div>
  )
}

const useForceUpdate = () => {
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
    return forceUpdate;
  };

export default AllNotes;