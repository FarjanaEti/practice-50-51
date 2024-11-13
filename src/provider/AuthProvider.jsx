
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

 export const AuthContext=createContext(null);
 const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
      //create user in register                        
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)                
    }
    
    //signin with google and email password in log in
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)                      
    }
    const signInwithGoogle=()=>{
           return signInWithPopup(auth,googleProvider)                   
    }
    //logIn logOut change state
      useEffect(()=>{
       const logOut=onAuthStateChanged(auth,currentUser=>{
        console.log('User',currentUser)
        setUser(currentUser)
       })
       return ()=>{
        logOut();
       }
      },[])

      //signOut from logIn
      const signOutUser=()=>{
        return signOut(auth)                     
      }

      //rendering child
    const name='eti' ;                         
    const info={
      name ,
      user, 
      createUser ,
      signInUser,
      signInwithGoogle,
      signOutUser                   
    }                          
  return (
  <AuthContext.Provider value={info}>
    {children}
 </AuthContext.Provider>
 );
};

export default AuthProvider;