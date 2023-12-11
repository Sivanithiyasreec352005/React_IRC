import Nav from "./Components/Nav";
 import './Assets/Css/nav.css';
//  import Img1 from './Assets/Css/Img/tower-103417_640.jpg'
import Footer from "./Components/Footer";
function App()
{
return(
<>
<Nav/>
<p>Just vibes</p>
<div class="navbar">
<h1>"Live your life with no excuses"</h1>
  {/* <img src={Img1} alt="myimage"/> */}
 </div>
<Footer/>
</>
);
}
export default App;