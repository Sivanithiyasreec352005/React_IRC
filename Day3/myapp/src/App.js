// import Nav from "./Components/Nav";
 import './Assets/Css/nav.css';
//  import Img1 from './Assets/Css/Img/tower-103417_640.jpg'
 import Footer from "./Components/Footer";
function App()
{
return(
  <>
  {/* <div className="navbar"> 
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
  <img src={Img1} alt="myimage"/>
  </div>
<Footer/> */}
<nav class="nav">
    
    <a href="#">Home</a>
    <a href="1st.html">Login</a>
    <a href="1-2.html">Register</a>
    </nav>

<div class="circle-top"></div>
<div class="circle-bottom"></div>
<header>
  <div class="header-content">
    <span>company management</span>
    <h1>Meet a team of experts and innovators who are pioneers in their field</h1>
  </div>
</header>
<section>
  <div class="card-top">
    <div class="card">
      <img src="https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11" alt="Alexandra Smith"/>
      <h2>Alexandra Smith</h2>
      <p>Founder and Chief Operations Officer</p>
    </div>
    {/* <div class="card">
      <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Smith"/>
      <h2>John Smith</h2>
      <p>Founder and Chief Executive Officer</p>
    </div> */}
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Erik Longman"/>
    <h2>Erik Longman</h2>
    <p>Chief Process and Innovation Officer</p>
  </div>
  {/* <div class="card">
    <img src="https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Matthew Foster"/>
    <h2>Matthew Foster</h2>
    <p>Chief Sales Officer</p>
  </div> */}
  <div class="card">
    <img src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artur Dichter"/>
    <h2>Artur Dichter</h2>
    <p>Chief Financial Officer</p>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Oliver Rohlsson"/>
    <h2>Oliver Rohlsson</h2>
    <p>Chief Technical Officer</p>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="James Hedge"/>
    <h2>James Hedge</h2>
    <p>Chief Legal Officer</p>
  </div>
  <div class="card">
    <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Eve Johnsson"/>
    <h2>Eve Johnsson</h2>
    <p>HR Manager</p>
  </div>

</section>


<footer>
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        
        <div class="social-media">
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
                <img src="https://images.hindustantimes.com/tech/img/2023/09/21/960x540/fb_1695273515215_1695273522698.jpg" alt="Facebook"/>
            </a>
            <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer">
                <img src="data:image/png;base64,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" alt="Twitter"/>
            </a>
            <a href="https://www.instagram.com/YourUsername" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1702339200&semt=ais" alt="Instagram"/>
            </a>
        </div>
    </footer>

</>
);
}
export default App;