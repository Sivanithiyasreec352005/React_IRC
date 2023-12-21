import '../Assets/nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/Register" className="nav-link">REGISTER</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/Settings" className="nav-link">SETTINGS</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/About" className="nav-link">ABOUT</Link>
        </li>
      </ul>
    </nav>
  <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <a href="https://jbfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
            Community Dashboard
          </span>
        </a>
      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-comments fa-2x"></i>
          <span class="nav-text">
          <Link to="/Services" className="nav-link">Customized Events</Link>
          </span>
        </a>
      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-camera-retro fa-2x"></i>
          <span class="nav-text">
            Survey Photos
          { 
          }
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-film fa-2x"></i>
          <span class="nav-text">
            Surveying Tutorials
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-book fa-2x"></i>
          <span class="nav-text">
            Surveying Jobs
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-cogs fa-2x"></i>
          <span class="nav-text">
            Tools 
          </span>
        </a>
      </li>
      <li>
        {/* <a href="#">
          <i class="fa fa-map-marker fa-2x"></i>
          <span class="nav-text">
            Member Map
          </span>
        </a> */}
      </li>
      <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text">
      <Link to="/Photos" className="nav-link">About</Link>
            {/* Documentation */}
          </span>
        </a>
      </li>
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
          <Link to="/Register" className="nav-link">Logout</Link>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</>

  );
}

export default Navbar;