import React, { useState } from 'react'
import Styles from '../../Styles/styles.module.scss'
import { userValidationSchema } from '../../Validations/UserValidation';
import { UserAuth } from './Auth';
import { useNavigate } from 'react-router-dom';
import { usePersistentState } from 'react-persistent-state';

const LoginForm = () => {
    const [userData, setUserData, unpersist] = usePersistentState({
        email: '',
        password: ''
    });
    const [persist, setPersist] = useState(false)
    const [error, setError] = useState('');

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
    const togglePersist = (event) =>{
        setPersist(!persist)
      }

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
          const isValid = await userValidationSchema.isValid(userData);
          if (isValid) {
            await signInUser(userData)
            if(persist===false){
             unpersist();  
            } 
            navigate("/")
          } else {
            throw new Error("Username or Password is invalid!")
          }
        } catch(error){
          setError(error.message);
        }
          
      };

  return (
        <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <span style={{color:"red"}}>{error}</span>
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
        <div className={Styles.keepSignedDiv}>
        <input 
        type="checkbox"
        className={Styles.keepSignedIn} 
        name="persist"  
        checked={persist}
        onChange={togglePersist} />
        <label >Keep me signed in</label>
        </div>
        
        <input type="submit" value="Submit" />
        <span>
          Don't have an account? <button className={Styles.toggleButton} onClick={()=>navigate("/signup")}>Sign Up Here</button>    
        </span>
        </form>   
            
  )
}

export default LoginForm
