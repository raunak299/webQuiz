import Navbar from '../../Components/Navbar/Navbar';
import styles from './Authentication.module.css';
import React, {useState,useRef, useContext} from "react";
// import { AuthErrorCodes } from 'firebase/auth';
import { AuthContext } from '../../Store/AuthContext';
// import { useHistory, useLocation } from 'react-router-dom';


function Authentication(){

     let [signIn, setSignIN]= useState(true);
    let authContx= useContext(AuthContext);


     const toggleHandler= ()=>{
        setSignIN(!signIn);
     }

     const emailRef=useRef<HTMLInputElement>(null);
     const passRef=useRef<HTMLInputElement>(null);
     const confirmPassRefRef=useRef<HTMLInputElement>(null);


    const authHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
        let email=emailRef.current?.value ?? '';
        let password=passRef.current?.value ?? '';
        let confirmPassword=confirmPassRefRef.current?.value ?? '';

        // !signIn && confirmPassword === password && console.log('Password do not match !!');

        if(!signIn){
            if(confirmPassword !== password){
                alert('Password do not match !!');
                return;  }
            authContx.signup(email,password); }
        else if(signIn){
            authContx.login(email, password)}
    }

    const testUserHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
        let email='test123@test.com';
        let password='testuser123';
            authContx.login(email, password)
    }


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
                <input type='text' ref={passRef} ></input>
                </div>
                { !signIn && <div className={styles['input-container']}>
                <label>Confirm Password </label>
                <input type='text' ref={confirmPassRefRef}></input>
                </div> }
                <div className={styles['auth-btn-container']}>
                <button onClick={authHandler}>{signIn ? 'Login' : 'Sign Up'}</button>
                <button onClick={testUserHandler}>Test User</button>
                </div>
               

                <div className={styles['auth-toggle']}>Not a Member ? <span onClick={toggleHandler}>{signIn ? 'Sign Up' : 'Login'}</span></div>
            </div>
        </div>
    )
}

export default Authentication;