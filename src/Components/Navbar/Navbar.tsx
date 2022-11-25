
import './Navbar.css'

function Navbar(){
  return(
    <div className="Navbar">
        <h1>Web<span>Quiz</span></h1>
        <div className="Navigation">
        <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-trophy"></i>
        <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar;