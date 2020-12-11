import React, {useState} from 'react'
import Home from './Home'
import {Link } from 'react-router-dom'
import './Login.css'
import Weather from './Weather'
// import CurrentState from './CurrentState'
import UserLocation from './UserLocation'



export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [login,setLogin]=useState('')


    const handleEmailInput = (event) =>{
    setEmail (event.target.value)  
    }
    const handlePasswordInput = (event) =>{
    setPassword (event.target.value)

    }
    const handleLogin = (event) =>{
    // setLogin (event.target.value)
    event.preventDefault();
          if (email === "ingonwona@gmail.com" &&
           password == "1234") {
           setLogin(true)
           alert('yes')
    }
}


    function handleLogout(event) {
        event.preventDefault();
        setLogin(false)
    }    


    return (
        <div>

            {login
            ?
            <>
        
            
            <Home/>
            <Weather/>
            {/* <UserLocation/> */}
        
            {/* <button */}
                 {/* onClick={handleLogout}>Logout */}
              {/* </button> */}

            </>

            :

            <form className=" auth ">
                <h3>Login</h3>
                <label>
                    Email:
                </label>
                <input type= "text" placeholder="Email"onChange={handleEmailInput}/>
                <label>
                    Password:
                </label>
                <input type= "text" placeholder="Password" onChange={handlePasswordInput}/>

                <button onClick={handleLogin}>Login</button>
                <p>Don't have an account? <br/> </p>
                <Link to = '/SignUp'><p>Create Account</p></Link>
            </form>
    }
        </div>
    )
}

