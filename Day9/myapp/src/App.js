import React from 'react'
import {Routes,Route}from 'react-router-dom'
import Users from './Pages/Users'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
const App=()=>{
  return(
    <>
    <Routes>
    <Route path='/' element={<Users/>}/>
    <Route path='/Adduser' element={<Adduser/>}/>
    <Route path='/Edituser/:id' element={<Edituser/>}/>
    </Routes>
    </>
  )
}
export default App;
