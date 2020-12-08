import React,{useEffect, useState} from 'react'
import Axios from 'axios'
// import './Login.css'
// import './Home.css'
import './CurrentState.css'


export default function CurrentState() {
     const [Current,setCurrent] = useState({})

            useEffect(()=>{
                Axios.get (
                    `http://api.weatherstack.com/current?access_key=cc7fb9736d323e7196853c5aec87610a&query=Accra`        
                    )
                    .then ((res)=>{
                        console.log(res.data);
                        setCurrent(res.data.current)
                    })
                    .catch((err) => {
                        console.log(err)
                    },[]);
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