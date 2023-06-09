import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from './Auth'

const PrivateRoute = ({children}) => {
  const { user } = UserAuth();
    if(!user){
        return <Navigate to='/login' />
    }
    return children;
}

export default PrivateRoute
