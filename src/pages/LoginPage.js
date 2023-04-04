import React, { useState } from 'react'
import Styles from '../Styles/styles.module.scss'
import { userValidationSchema } from '../Validations/UserValidation';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userData)
        const isValid = await userValidationSchema.isValid(userData);
        if (isValid) {
          alert("Login Sucessfull!")
          navigate("/home")

        } else {
          throw new Error("Error: Username or Password is invalid!")
        }
      };

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
        <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <div className={Styles.loginInputDiv}>
        <input  
        type='text'
        name="username"  
        value={userData.username.value}
        onChange={handleInputChange}
        className={Styles.allInputs}
        placeholder='Email or Phone'
        required />
        <label className={Styles.labels}>
            Username
        </label>
        </div>
        <div className={Styles.loginInputDiv}>
        <input  
        type='password'
        name="password"  
        value={userData.password.value} 
        onChange={handleInputChange}
        className={Styles.allInputs}
        placeholder='Password'
        required />
        <label className={Styles.labels}>
            Password
        </label>
        </div>
        <input type="submit" className='' />
        </form>    
            </div>    
    </div>
  )
}

export default LoginPage
