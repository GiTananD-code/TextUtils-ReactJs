import React from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route 
// } from "react-router-dom";

 function App() {
  return (
    <>
  {/* //   <Router> 
  //   <Navbar title ="TextUtils"/>
  //   <Routes>
  //         <Route exact path="/about" element={<About />}>
  //         </Route>
  //         <Route exact path="/" element={<TextForm heading='Enter Text for Conversion'/>}>
  //         </Route>
  //   </Routes>
  //  </Router>  */}
      
      <Navbar title ="TextUtils"/>
      <TextForm heading='Enter Text for Conversion'/>
      </>
  );
}

export default App;
