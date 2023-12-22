import React, { useState } from 'react'
import MyContext from './MyContext';

function MyContextProvider({children}) {
    const [value,setValue] = useState(0);
    const [color,setColor]=useState("white");
    const [message,setMessage] =useState([]);
    const update = (newval)=>{
        setValue(newval)
    };

  return (
    <MyContext.Provider value={{value,update,color,setColor,message,setMessage}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider