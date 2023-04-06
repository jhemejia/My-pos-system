import React from 'react'
import { auth } from '../../firebase'
import { Outlet } from 'react-router-dom'




const AuthProvider = () => {
    console.log(auth)

    return (
    <div>
      <Outlet />
    </div>
  )
}


export default AuthProvider
