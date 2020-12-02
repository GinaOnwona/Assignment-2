import React,{useEffect, useState} from 'react'
import axios from 'axios'
// import './Login.css'


export default function CurrentState() {
     const [Current,setCurrent] = useState({})

            useEffect(()=>{
                axios.get (
                    `http://api.weatherstack.com/current?access_key=4b40536f3be28bed5972c47ff8337f06&query=Accra`        
                    )
                    .then ((res)=>{
                        console.log(res.data);
                        setCurrent(res.data.current)
                    })

            })
     
    return (
        <div >
    {
                   Current &&(
                   <div className="auth">
                    <h2>Accra</h2>
                    <h4> Time: {Current.observation_time} </h4>
                    <br/>
                    {<img src={Current.weather_icons} alt=''/>}
                    <br/>
                    <h4> {Current.weather_descriptions} </h4>
                    <br/>
                    <h4>Temperature: {Current.temperature} &#176;</h4>
                    <br/>
                    <h4> Humidity: {Current.humidity}</h4>
                    </div>
            )}
                           
        </div>
    )
}
