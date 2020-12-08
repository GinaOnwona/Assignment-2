import React, { useEffect, useState } from 'react'
// import CurrentState from './CurrentState';
import Weather from './Weather';
import './Home.css'
import CurrentState from './CurrentState';
import History from '../Components/History';
// import './Login.css'


export default function Home() {
    const [history, setHistory] = useState([])
    useEffect(()=> {
        const history = localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : []
        setHistory(history)
    })
    return (
        <div className="cont">

            <h1 className="header">iWeather</h1>
             <CurrentState/>  
             {/* <Weather/>  */}
             {/* {
                 history.map(item=> <History history={history}/>)
             } */}
        </div>
    )
}




