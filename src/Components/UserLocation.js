import React,{useEffect,useState} from 'react';
import Axios from 'axios'
import './Home.css'

const APP_ID ="f63e23e7144b8fb938a76dd4940faa04"

export default function UserLocation() {
    const [coords, setCoords]= useState({})
    const [weatherData,setWeatherData]= useState({})
    
    const getCurrentWeather =(coords)=>{
        if (coords.latitude !==undefined){
    
            Axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${APP_ID}`
              
            )
            .then ((response)=>
            {setWeatherData(response.data)})
            .catch((error)=>{console.log(error)
            })
        

        }
       
        else{console.log ("no coords available")}
    }

    useEffect (()=>{
        navigator.geolocation.getCurrentPosition( (position)=>{
            // setCoords(position.coords)
            getCurrentWeather(position.coords)
        },(error)=>{
            console.log(error)

        })
    },[])

    console.log(weatherData)

    

    return (
        <div className="cont">
            <div>
            <div className="user-weather">
                    <div className="row">
           <div className="header">
            {/* <h1 className="header"> Welcome to iWeather</h1> */}
            </div>
            <div className="auth">
            {/* <div className="col-md-3 weather-info">
            */}
           {/* <h3>Description: {weatherData.weather ? weatherData.weather[0].description :""}</h3>
            </div> */}
            
            <br/>
            <div className="col-md-3 weather-info">
            <h3>Temperature:{weatherData.main ? weatherData.main.temp :""}&#176;</h3>
            </div>
            <br/>
            <div className="col-md-3 weather-info">
           <h3>Humidity: {weatherData.main ? weatherData.main.humidity :""}</h3>
            </div>
            <br/>
            <div className="col-md-3 weather-info">
            <h3>Pressure:{weatherData.main ? weatherData.main.pressure :""}</h3>
            </div>
            <br/>
            <div className="col-md-3 weather-info">
           <h3> Weather Icon: {weatherData.weather ? weatherData.weather.icon :""}</h3>
            </div>
            <br/>
            <div className="col-md-3 weather-info">
           <h3>Location: {weatherData.main ? weatherData.main.name :""}</h3>
            </div>
            {/* <div className="col-md-3 weather-info">
            <h3>Wind Speed:{weatherData.wind ? weatherData.wind.speed :""}</h3>
            </div> */}


        
            
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
    )
}


