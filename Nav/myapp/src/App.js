// import logo from './logo.svg';
import React from 'react';
// import './App.css';
// import Home from './Pages/Home';
// import Contact from './Pages/Contact';
import Nav from './components/nav';
import { Route, Routes } from 'react-router-dom';  // Import Routes and Route from react-router-dom

function App() {
  return (
    <>
      <Nav />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;