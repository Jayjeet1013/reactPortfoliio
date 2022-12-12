
import React from "react";
import Home from "./components/Home";


function  App()  {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="projects" element={ <Projects/> } />
      </Routes>
     
    </div>
  );
}

export default App;
