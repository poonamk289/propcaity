import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import AllNotes from "./Component/AllNotes";



 function App() {
    const [view , setView] = useState("grid");
    const [search,setSearch] = useState("");
    console.log(search);
  return(

    <div >
      <Header setView={setView} view={view} setSearch={setSearch}/>
     <Notes />
     <AllNotes view={view} search={search}/>
    

    </div>
  )
}

export default App;
