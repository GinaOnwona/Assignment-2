import React, {useEffect,useState} from 'react'
import axios from 'axios'
// import {Link } from 'react-router-dom'
import './Weatherhome.css'

const APP_ID ="f63e23e7144b8fb938a76dd4940faa04"

export default function Login() {
    const [Country,setCountry]=useState('')
    const [City,setCity]=useState('')
    // const [Current,setCurrent]=useState([])
    const [weatherData,setWeatherData]= useState(null)

    const [history, setHistory] = useState(localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : [])

    const handleCountryInput = (event) =>{
    setCountry (event.target.value)
    }
    const handleCityInput = (event) =>{
    setCity (event.target.value)

    }

    const saveSearchHistory = (query, result) => {
        const newHistory = history;
        if (history.length < 5) {
            newHistory.push({
                query: query,
                result: result
            })
        } else if (history.length > 5) {
            newHistory.unshift()
            newHistory.push(history)
        }
        localStorage.setItem("searchHistory", JSON.stringify(newHistory))
    }
  
    const WeatherData=(e) =>{
        e.preventDefault()
    if (Country && City){
        axios.get (
        `http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units=metric&appid=${APP_ID}`        
        )
        .then(res => {
            setWeatherData(res.data)
            saveSearchHistory(`${City}, ${Country}`, res.data)
            console.log(weatherData)
        })
        .catch(error => console.log(error))
    }}
    return (
       

        <div className="auth">
            <form >
            
                <input type= "text" placeholder="Country"onChange={handleCountryInput}/>
                <input type= "text" placeholder="City" onChange={handleCityInput}/>
                <button onClick={WeatherData}>Search</button>
                </form>
                <br/>
                <br/>
                <br/>
                <div className="user-weather">
                    <div className="row">
               
                
                    {/* <div className="col-md-3 weather-info"> */}
{/*                
                    <h3>Description: {
                    weatherData ? 
                    weatherData.weather[0].description :  null }</h3>
                    </div>
                    <br/> */}
                <div className="col-md-6 weather-info"></div>
                <div> 
                <h3>Icon: {weatherData ? weatherData.weather.icon :""}</h3>
                </div>
                <br/>
                <br/>
                <div className="col-md-6 weather-info">
                <h3>Temperature:{weatherData ? weatherData.main.temp :""}&#176;</h3>
                </div>
            
                <div className="col-md-3 weather-info">
               <h3>Humidity: {weatherData ? weatherData.main.humidity :""}</h3>
                </div>
        
                <div className="col-md-3 weather-info">
                <h3>Pressure:{weatherData ? weatherData.main.pressure :""}</h3>
                </div>
                <br/>
                {/* <div className="col-md-3 weather-info">
               <h3>Location: {weatherData ? weatherData.name.name :""}</h3>
                </div> */}
                <br/>
                {/* <div className="col-md-3 weather-info">
                <h3>Wind Speed:{weatherData ? weatherData.wind.speed :""}</h3>
                </div> */}
    
    
            
                
            
            </div>
            </div>
        </div>
        
    )}