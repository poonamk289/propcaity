import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import AllNotes from "./Component/AllNotes";



 function App() {
    const [view , setView] = useState("");
  return(

    <div >
      <Header setView={setView} view={view}/>
     <Notes view={view}/>
     <AllNotes view={view}/>
    

    </div>
  )
}

export default App;
