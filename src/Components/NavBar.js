import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    const [Login, setLogin]= useState(true)


    return (
        <div className="Nav">
             <ul>
            {
            Login
            
            ?
            <>
            <Link to = '/'>{""}<li>Home</li></Link>
            <Link to = '/SignUp'>{""}<li>SignUp</li></Link>
            <Link to ='/Login'><li>Login</li></Link>
            <Link to ='/Weather'><li>Weather</li></Link>
            </>
            :
            <>

            </>
        
        
        }

        </ul>

                </div>
    )
}
