
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Store/AuthContext';
import { Link } from 'react-router-dom';
import './Navbar.css'
import ThemeContext from '../../Store/ThemeContext';

function Navbar(){

  const authContx=useContext(AuthContext);
  const {theme,themeHandler}= useContext(ThemeContext);

   const toggleTheme= ()=>{
     themeHandler();
   }

  useEffect(()=>{
    document.body.className=theme;
  },[theme] )

  return(
    <div className="Navbar">
        <Link to='/home'>
        <h1>Web<span>Quiz</span></h1>
        </Link>
        <div className="Navigation">
        {theme==='dark-theme' && <i className="fa-solid fa-sun" onClick={toggleTheme}></i> }
        {theme==='light-theme' && <i className="fa-solid fa-moon" onClick={toggleTheme}></i> }
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