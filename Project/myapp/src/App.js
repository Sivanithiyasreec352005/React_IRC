import React from 'react';
import Nav from './Components/Nav.js';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
// import Leftbar from './Components/Leftbar.js';
//  import Dashboard from './Components/Dashboard.js';
 import Register from './Components/Register.js';
//  import Settings from './Components/Settings.js'; 
 import About from './Components/About.js'; 
 import Services from './Components/Services.js';
 import Photos from './Components/Photos.js'
import  { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Services from './Components/Services.js';
function App(){
  return(
    <>
    <Router>

      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>  
        <Route path="/About" element={<About/>}></Route>  
        <Route path="/Services" element={<Services/>}></Route>  
        <Route path="/Photos" element={<Photos/>}></Route>
        {/* <Route path="/Dash" element={<Dashboard/>}></Route> */}
      </Routes>
    </Router>
    </>
    )
}
export default App;