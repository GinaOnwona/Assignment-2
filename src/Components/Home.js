import React from 'react'
// import CurrentState from './CurrentState';
import Weather from './Weather';
import './Home.css'
import CurrentState from './CurrentState';
// import './Login.css'


export default function Home() {
    return (
        <div className="cont">

            <h1 className="header">iWeather</h1>
             <CurrentState/>  
             {/* <Weather/>  */}

            
            
        </div>
    )
}




