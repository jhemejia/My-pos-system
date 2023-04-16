import React, { useState } from 'react'
import Styles from '../../Styles/styles.module.scss'
import { userValidationSchema } from '../../Validations/UserValidation';
import { UserAuth } from './Auth';
import { useNavigate } from 'react-router-dom';
import { usePersistentState } from 'react-persistent-state';



const SignUpForm = (pros) => {
    const [userData, setUserData, unpersist] = usePersistentState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [persist, setPersist] = useState(false)
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
    const togglePersist = (event) =>{
        setPersist(!persist)
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const isValid = await userValidationSchema.isValid(userData);
          if (isValid) {
            await createUser(userData);
            if(persist===false){
              unpersist();  
             }
            navigate("/")
          } else {
            throw new Error("Username or Password is not valid!")
          }
        } catch(error){
          setError(error.message)
        }
      };

  return (
        <form onSubmit={handleSubmit}>
        <h3>Sign Up Here</h3>
        <span style={{color:"red"}}>{error}</span>
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
        <div className={Styles.keepSignedDiv}>
        <input 
        type="checkbox"
        className={Styles.keepSignedIn} 
        name="persist"  
        checked={persist}
        onChange={togglePersist} />
        <label >Save this device</label>
        </div>
        <input type="submit" className='' value="Submit"/>
        <span>
          Already have an account? <button className={Styles.toggleButton} onClick={()=>navigate('/login')}>Log In Here</button>    
        </span>        </form>
      
  )
}

export default SignUpForm
