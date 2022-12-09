
import { useContext } from 'react';
import { AuthContext } from '../../Store/AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){

  const authContx=useContext(AuthContext);

  return(
    <div className="Navbar">
        <Link to='/home'>
        <h1>Web<span>Quiz</span></h1>
        </Link>
        <div className="Navigation">
        <i className="fa-solid fa-moon"></i>
        <Link to='dashboard'>
        <i className="fa-solid fa-trophy"></i>
        </Link>
         {!authContx.token && 
        <Link to='/authentication'>  <button>Login</button> 
          </Link>}
          {authContx.token && 
        <Link to='/profile'>  <i className="fa-solid fa-user"></i>
          </Link>}
        </div>
    </div>
  )
}

export default Navbar;