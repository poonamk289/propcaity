import React, { useState } from 'react'
import MyContext from './MyContext';

function MyContextProvider({children}) {
    const [value,setValue] = useState(0);
    const [color,setColor]=useState("white");
    const update = (newval)=>{
        setValue(newval)
    };

  return (
    <MyContext.Provider value={{value,update,color,setColor}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider