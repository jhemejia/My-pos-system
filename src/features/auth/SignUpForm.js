import React, { useState } from 'react'
import Styles from '../../Styles/styles.module.scss'
import { userValidationSchema } from '../../Validations/UserValidation';
import { UserAuth } from './Auth';
import { useNavigate } from 'react-router-dom';



const SignUpForm = (props) => {
    const {toggleIsLogin} = props;
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const { createUser } = UserAuth();
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
          await createUser(userData);
          navigate("/")
        } else {
          throw new Error("Error: Username or Password is invalid!")
        }
      };

  return (
        <form onSubmit={handleSubmit}>
        <h3>Sign Up Here</h3>
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
        <input type="submit" className='' value="Submit"/>
        <span>
          Already have an account? <button className={Styles.toggleButton} onClick={()=>toggleIsLogin()}>Log In Here</button>    
        </span>        </form>
      
  )
}

export default SignUpForm
