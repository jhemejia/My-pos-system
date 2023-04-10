import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';



 const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState({});
  const createUser = async ({email, password}) => {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  const signInUser = async ({email, password}) => {
    return signInWithEmailAndPassword(auth,email, password)
  }

  const logout  = () =>{ 
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        
        setUser(currentUser)
    })
    return ()=>{
      unsubscribe();
    }
  })

    return (
    <AuthContext.Provider
    value={{createUser, signInUser, user, logout}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const UserAuth = () => {
  return useContext(AuthContext)
}