import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
const Nav =() =>
{
    return(
        <>
        {/* <Link className="nav-link" to={'/Signup'}><b>Sign up</b></Link>
<Link className="nav-link" to={'/Entry'}><b>Entry</b></Link>
<Link className="nav-link" to={'/Form'}><b>Login</b></Link>
<Link className="nav-link" to={'/Home'}><b>Home</b></Link>
// <Link className="nav-link" to={'/Nav'}><b>Nav</b></Link> */ }
 <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
               <li className="nav-item"><Link className="nav-link" to={'/Signup'}><b>Sign up</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/Entry'}><b>Entry</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/Form'}><b>Login</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/Home'}><b>Home</b></Link></li>
                </div> 
        <div class="body100">
<nav class="shelf">
  <a class="book home-page">....WELCOME..!!</a>

  <span class="book not-found"></span>

  <span class="door left"></span>
  <span class="door right"></span>
</nav>
</div>
</>
)
}
export default Nav;
