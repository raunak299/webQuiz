import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase";
import { useHistory,useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { AuthContextType,LocationState } from "../types/auth-context.types"
import { UserType } from "../types/auth-context.types";

export const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthContextProvider:React.FC <{ children: React.ReactNode }> = (props) => {


  const localStorageToken = JSON.parse(
    localStorage.getItem('loginItems') || '{}'
  );
  const [token, setToken] = useState<string>(localStorageToken?.token || '');
  const [userId, setUserId] = useState<string>(localStorageToken?.userId || '');
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
  });



  let location=useLocation<LocationState>();

  const signup=  async(email:string, password:string) => {
    try{
       const res= await createUserWithEmailAndPassword(auth,email, password);
       const user:any= res.user;
       console.log(user);
       setToken(user?.accessToken);
       setUserId(user?.uid);
       localStorage.setItem(
        'loginItems',
        JSON.stringify({ token: user?.accessToken, userId: user?.uid })
      );
          const { from } = location.state;
        navigateOnLoginHandler(from.pathname);
    }
    catch(error){
      console.log(error);
    }
  }

  const login = async(email:string, password:string)=> {
    try{
      const res= await signInWithEmailAndPassword(auth,email, password);
      const user:any= res.user;
      setToken(user?.accessToken);
      setUserId(user?.uid);
      localStorage.setItem(
       'loginItems',
       JSON.stringify({ token: user?.accessToken, userId: user?.uid })
     );
     const { from } = location.state;
     navigateOnLoginHandler(from.pathname);
   }
   catch(error:any){
     console.log(error.message);
   }
  }

  function logout() {
    signOut(auth);
    localStorage.removeItem('loginItems');
    setToken('');
    setUser({ name: '', email: '' });
    setUserId('');
  }

  const history = useHistory();
  const navigateOnLoginHandler = (path:string) => {
      history.push(path);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user:any) => {
      setUser(user)
      // setLoading(false)
    })

    return unsubscribe
  }, [])

  const value : AuthContextType = {
    token,
    userId,
    user,
    login,
    signup,
    logout,
    navigateOnLoginHandler
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

