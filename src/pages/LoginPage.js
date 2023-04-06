import React from 'react'
import Styles from '../Styles/styles.module.scss'
import LoginForm from '../features/auth/LoginForm'
import SignUpForm from '../features/auth/SignUpForm'
import useToggle from '../hooks/useToggle'

const LoginPage = () => {
    const [isLogin, toggleIsLogin ] = useToggle(true);
  console.log(isLogin)
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
            {isLogin ? <LoginForm toggleIsLogin={toggleIsLogin}/> : <SignUpForm toggleIsLogin={toggleIsLogin} /> }
            </div>

    </div>
  )
}

export default LoginPage
