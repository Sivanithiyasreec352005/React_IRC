// import logo from './logo.svg';
// import './App.css';
// import { Route,Routes } from "react-router-dom";
// import Form from './Components/Form.js';
//  import './Assets/Css/Home.css';
// import Signup from './Components/Signup.js';
// import './Assets/Css/Signup.css';

import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './Components/Home.js';
import Nav from './Components/Nav.js';
import Entry from './Components/Entry.js';
import Form from './Components/Form.js';
import Signup from './Components/Signup.js';
import './Assets/Css/home.css';
  import './Assets/Css/nav.css';
  import './Assets/Css/Signup.css';
  import './Assets/Css/form.css';
  import './Assets/Css/entry.css';
  function App() {
    return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {/* <ul className="navbar-nav ml-auto" id = "nav"> */}
                <li className="nav-item"><Link className="nav-link" to={'/Signup'}><b>Sign up</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/Entry'}><b>Entry</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/Form'}><b>Login</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/Home'}><b>Home</b></Link></li>
              {/* </ul> */}
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Nav />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/Form" element={<Form/>} />
              <Route path="/Entry" element={<Entry/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    )
  }
  export default App;