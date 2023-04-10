import React, { useState } from 'react'
import Styles from '../../Styles/styles.module.scss'
import { userValidationSchema } from '../../Validations/UserValidation';
import { UserAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const {toggleIsLogin} = props;
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const { signInUser } = UserAuth();
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
        const isValid = await userValidationSchema.isValid(userData);
        if (isValid) {
          await signInUser(userData)
          navigate("/")
        } else {
          throw new Error("Error: Username or Password is invalid!")
        }
      };

  return (
        <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <div className={Styles.loginInputDiv}>
        <input  
        type='text'
        name="email"  
        value={userData.email.value}
        onChange={handleInputChange}
        className={Styles.allInputs}
        placeholder='Email or Phone'
        required />
        <label className={Styles.labels}>
            Email
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
        <input type="submit" value="Submit" />
        <span>
          Don't have an account? <button className={Styles.toggleButton} onClick={()=>toggleIsLogin()}>Sign Up Here</button>    
        </span>
        </form>   
            
  )
}

export default LoginForm
