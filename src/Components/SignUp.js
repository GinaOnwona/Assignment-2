import React, {useState} from 'react'
import './Signup.css'
import Login from "./Login.js"
import Home from './Home'
import './Login.css'


export default function SignUp() {
    const [Firstname,setFirstname]=useState('')
    const [Lastname,setLastname]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Confirmpassword,setConfirmpassword]=useState('')
    const [SignUp,setSignup]=useState('')


        const handleFirstnameInput = (event) =>{
        setFirstname (event.target.value)
        }
        const handleLastnameInput = (event) =>{
            setLastname (event.target.value)
            }

        const handleEmailInput = (event) =>{
                setEmail (event.target.value)
                }

        const handlePasswordInput = (event) =>{
        setPassword (event.target.value)
    
        }

        const handleConfirmpasswordInput = (event) =>{
            setConfirmpassword (event.target.value)
        
            }
        const handleSignup = (event) =>{
        event.preventDefault();
        setSignup(true) 
    
        }

        return (

            <div >
            {SignUp
            ?
            <>
             {/* <p>Welcome to myWeather App</p>  */}
            
             <Login/>
             </>

            :
            
             <form className="auth" >
             <h3>SignUp </h3>

             <br/>


             <label>
                 Firstname:
             </label>
             <input type = "text"  placeholder= "Firstname" onChange={handleFirstnameInput}/>
             
             <label>
                 Lastname:
             </label>
             <input type = "text" placeholder= "Lastname" onChange={handleLastnameInput}/>

             <label>
                 Email:
             </label>
             <input type = "text" placeholder= "Email" onChange={handleEmailInput}/>


             <label>
                 Password:
             </label>
             <input type = "text" placeholder= "Password" onChange={handlePasswordInput}/>
            
             <label>
                 ConfirmPassword:
             </label>
             <input type = "text"  placeholder= "Confirm Password" onChange={handleConfirmpasswordInput}/>
            <br/>
          <a>
          <button className="button" type="submit" onClick={handleSignup}>Submit</button>

         </a>  
          
             </form>
}
        </div>
    )
}
