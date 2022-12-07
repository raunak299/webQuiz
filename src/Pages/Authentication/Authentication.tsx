import Navbar from '../../Components/Navbar/Navbar';
import styles from './Authentication.module.css';
import React, {useState,useRef, useContext, useEffect} from "react";
// import { AuthErrorCodes } from 'firebase/auth';
import { AuthContext } from '../../Store/AuthContext';
import { useHistory, useLocation } from 'react-router-dom';


function Authentication(){

     let [signIn, setSignIN]= useState(true);
    let authContx= useContext(AuthContext);
      let history=useHistory();
      


      

    //   let login = authContx.token;
    //   if(login){
    //     history.replace('/profile');
    //   }

     const toggleHandler= ()=>{
        setSignIN(!signIn);
     }

     const emailRef=useRef<HTMLInputElement>(null);
     const passRef=useRef<HTMLInputElement>(null);
     const confirmPassRefRef=useRef<HTMLInputElement>(null);


    const authHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
        let email=emailRef.current?.value ?? '';
        let password=passRef.current?.value ?? '';
        if(!signIn){
            authContx.signup(email,password); }
        else if(signIn){
            authContx.login(email, password)}
        //  console.log(location);
        //  let state=location.state ;
        // const { from } = location.state;
        // authContx.navigateOnLoginHandler(from.pathname);
        
    }




    // useEffect(()=>{
    //     const unsubscribe = auth.onAuthStateChanged(user:FirebaseAuthTypes.User=> {
    //         setCurrentUser(user)
    //       })
    //       return unsubscribe
    // })

    return(
        <div className={styles['auth-page']}>
                  <Navbar/>
            <div className={styles['auth-modal']}>
                <h2>{signIn ? 'Login' : 'Sign Up'}</h2>
                <div className={styles['input-container']}>
                <label>Email </label>
                <input type='text' ref={emailRef}></input>
                </div>
                <div className={styles['input-container']}>
                <label>Password </label>
                <input type='password' ref={passRef}></input>
                </div>
                { !signIn && <div className={styles['input-container']}>
                <label>Confirm Password </label>
                <input type='password'></input>
                </div> }
                <div className={styles['auth-btn-container']}>
                <button onClick={authHandler}>{signIn ? 'Login' : 'Sign Up'}</button>
                <button>Test User</button>
                </div>
               

                <div className={styles['auth-toggle']}>Not a Member ? <span onClick={toggleHandler}>{signIn ? 'Sign Up' : 'Login'}</span></div>
            </div>
        </div>
    )
}

export default Authentication;