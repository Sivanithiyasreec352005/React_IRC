import Nav from "./Components/Nav";
 import './Assets/Css/nav.css';
//  import Img1 from './Assets/Css/Img/tower-103417_640.jpg'
import Footer from "./Components/Footer";
function App()
{
return(
  <>
  <div className="navbar"> 
         <nav>Home </nav>
          <nav>Register </nav>
          <nav>Contact us</nav>
        </div>
<Nav/>

<div class="navbar">
<div className="navbar"> 
         <nav>Home</nav>
          <nav>Register</nav>
          <nav>Contact us</nav>
        </div>

<h1>"Live your life with no excuses"</h1>
<div class="side left-side">
            <title>Self travel</title>
  <div class="card"></div>
  <div class="row">
  <div class="card small">
    <label>Self love</label>
    <img src="https://cdn.pixabay.com/photo/2013/04/13/18/42/tower-103417_640.jpg" />
  </div>
    <div class="card small">
    <label>Self travel</label>
    <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D" />
  </div>
    
</div>
</div>
<div class="side center-side">
  <div class="card">
    <button class="button">TOURISM</button>
   <h1>Smile laugh and travel all through the world..!!</h1>
  </div>
</div>
<div class="side right-side">
  <div class="card"></div>
</div>
  {/* <img src={Img1} alt="myimage"/> */}
 </div>
<Footer/>
</>
);
}
export default App;