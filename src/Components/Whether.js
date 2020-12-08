import React, {useState} from 'react'
import axios from 'axios'
// import {Link } from 'react-router-dom'
import './Weatherhome.css'


export default function Login() {
    const [Country,setCountry]=useState('')
    const [City,setCity]=useState('')
    const [Current,setCurrent]=useState([])

    const handleCountryInput = (event) =>{
    setCountry (event.target.value)
    }
    const handleCityInput = (event) =>{
    setCity (event.target.value)

    }
  
    const getweather=(e) =>{
        e.preventDefault()
    if (Country && City){
        axios.get (
        `http://api.weatherstack.com/current?access_key=2b8379d90400cca5edccb584f65a68c6&query=${Country},${City}`        
        )
                
        
        .then ((res)=>{
            console.log(res.data);
            setCurrent(res.data.current)

        })
        .catch((err) => {
            console.log(err)
        },[]);
    }}
    return (
       

        <div>
            <form className="auth">
                {/* <p>I am in {Country} in {City}</p> */}
                <input type= "text" placeholder="Country"onChange={handleCountryInput}/>
                <input type= "text" placeholder="City" onChange={handleCityInput}/>
                <button onClick={getweather}>Search</button>
            </form>
            
            {/* <br/>
            {Current.observation_time}*?
            <br/>
        
            
             */
               
                  Current &&(
                   <div className="header">
                    <h3>Time: {Current.observation_time} </h3>
                    <br/>
                    {<img src={Current.weather_icons} alt=''/>}
                    <br/>
                    <h3> {Current.weather_descriptions} </h3>
                    <br/>
                    <h3>Temperature: {Current.temperature} &#176;</h3>
                    <br/>
                    <h3>Humidity:{Current.humidity}</h3>
                    
                 
                  </div>
                   )
               }

        </div>
    )}