import React from 'react'
import Styles from '../Styles/styles.module.scss'
import LoginForm from '../features/auth/LoginForm'

const LoginPage = () => {
  
  return  ( 
    <div className={Styles.area}>
      <ul className={Styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className={Styles.loginFormContainer}>
             <LoginForm />
            </div>

    </div>
  )
}

export default LoginPage
