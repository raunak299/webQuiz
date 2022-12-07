import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
import {
    getAuth
  } from 'firebase/auth';
import {
    getFirestore,collection
} from 'firebase/firestore'


// const app=initializeApp({
//     apiKey: process.env.React_App_Firebase_Api_Key,
//     authDomain: process.env.React_App_Firebase_Auth_Domain,
//     projectId: process.env.React_App_Firebase_PROJECT_ID,
//     storageBucket: process.env.React_App_Firebase_STORAGE_BUCKET,
//     messagingSenderId: process.env.React_App_Firebase_MESSAGING_SENDER_ID,
//     appId: process.env.React_App_Firebase_APP_ID,
// })


const firebaseConfig = {
    apiKey: "AIzaSyCY3kSs7KolGcqPj5brNpuVC-_47X6fk_8",
    authDomain: "webquiz-3ee33.firebaseapp.com",
    projectId: "webquiz-3ee33",
    storageBucket: "webquiz-3ee33.appspot.com",
    messagingSenderId: "1059012628699",
    appId: "1:1059012628699:web:33c232e625b805b404bcfe"
  };
  
  //Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const db=getFirestore(app) ;
export const userCollectionRef =collection(db,'users')
// const firestore= firebase.firestore();
// export const database ={
//     users:collection(firestore,'users')
// }