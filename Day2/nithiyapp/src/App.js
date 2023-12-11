import './Assets/Css/style.css'
function App() {
    return (
        <div>
            <div>
            <nav class="nav">
            <a href="nith.html">Home</a>
                <a href="login.html">Sigup</a>
                    <a href="contact.html">Contact</a>

        </nav>
        </div>
         <form>
                <input type="text" placeholder = "Name" required />
                <input type="date" placeholder="Date of birth" required/>
                <input type="email" placeholder="Email id" required/>
                <input type="textarea" placeholder="Address" required/>
                <input type="phone " placeholder="Mobile number" required/>
                <input type="text" placeholder="Qualification" required/>
                <button class="btn" type="submit">Register</button>
                <div class="switch">
                <p>Having an account? <a href="signup.html">Log In</a></p>
                    </div>
                </form>   
        </div>
        )
}
export default App;
