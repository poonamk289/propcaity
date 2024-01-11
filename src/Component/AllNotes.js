import React, { useContext, useEffect, useState } from 'react'
import './note.css';
import SingleNote from './SingleNote';
import MyContext from '../Context/MyContext';
function AllNotes({view,search}) {
   
    const {message,value,update,setMessage} = useContext(MyContext);
    // const [localMessage,setLocalMessage] = useState([]);
    const array1=JSON.parse(localStorage.getItem("notesArray"));
    const updateObjectInLocalStorage =(updateobj)=>{
         const index= array1.findIndex(obj=>obj.sno===updateobj.sno)
         if(index!==-1){
            const updateMessage = [...array1];
            updateMessage[index]=updateobj;
            setMessage(updateMessage);
            localStorage.setItem('notesArray', JSON.stringify(updateMessage));
         }
    } 

    const deleteObjectFromLocalStorage =(sno)=>{
      
      const updatedobj= array1.filter(obj=>obj.sno!==sno);
      setMessage(updatedobj);
      localStorage.setItem("notesArray",JSON.stringify(updatedobj));
      
    }
    // let length="";
    // let filteredMessages=[];
    // if(array1){
    //   filteredMessages  = array1.filter(obj => obj.title.toLowerCase() === search.toLowerCase());
    //   console.log(filteredMessages);
    //    length=filteredMessages.length?"t":"";
    // }else{
    //   console.log("array1 is null");
    // }
   
    
  return (
    <div className='container-note' style={{display:view,flexDirection:"column"}}>
     
      {
       array1 && array1.map((note)=>(
        <SingleNote note={note} updateObjectInLocalStorage={updateObjectInLocalStorage}
        deleteObjectFromLocalStorage={deleteObjectFromLocalStorage}
        />
       ))
        
      }
      
       {/* <SingleNote/> */}
       {/* <SingleNote/> */}
        {/* <p>{value}</p> */}
    </div>
  )
}



export default AllNotes;

// { length && filteredMessages.map((note)=>(
//   <SingleNote note={note} updateObjectInLocalStorage={updateObjectInLocalStorage}
//   deleteObjectFromLocalStorage={deleteObjectFromLocalStorage}
//   />
//  ))

// }