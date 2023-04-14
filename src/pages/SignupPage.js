import React from 'react'
import Styles from '../Styles/styles.module.scss'
import SignUpForm from '../features/auth/SignUpForm'

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
             <SignUpForm />
            </div>

    </div>
  )
}

export default LoginPage
