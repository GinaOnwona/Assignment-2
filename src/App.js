import React from 'react'
import Login from "./Components/Login";
import Home from "./Components/Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NavBar from "./Components/NavBar"
import SignUp from './Components/SignUp';
import './App.css'
// import Weather from "./Components/Weather"
import WeatherHome from "./Components/WeatherHome";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    
  
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/weather' component={WeatherHome} />

        
        </Switch>
        
    </BrowserRouter>

    

  )
}