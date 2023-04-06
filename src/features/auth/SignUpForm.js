import React, { useState } from 'react'
import Styles from '../../Styles/styles.module.scss'
import { userValidationSchema } from '../../Validations/UserValidation';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUpForm = (props) => {
    const {toggleIsLogin} = props;
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

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
          createUserWithEmailAndPassword(auth,userData.username, userData.password)
          .then((userCredential)=>{
            console.log(userCredential)
          }).catch((error)=>{
            console.log(error)
          })

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
        <input type="submit" className='' />
        <p>
          <button onClick={()=>toggleIsLogin()}>Already have an account? Log In Here</button>    
        </p>        </form>
      
  )
}

export default SignUpForm
