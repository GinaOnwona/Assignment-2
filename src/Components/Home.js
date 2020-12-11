import React, { useEffect, useState } from 'react'
import Weather from './Weather';
import './Home.css'
// import CurrentState from './CurrentState';
import History from '../Components/History';
import UserLocation from './UserLocation';
// import './Login.css'


export default function Home() {
    const [history, setHistory] = useState([])
    useEffect(()=> {
        const history = localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : []
        setHistory(history)
    })
    return (
        <div className="cont">

             <UserLocation/>  
             {/* <Weather/>  */}
             {/* {
                 history.map(item=> <History history={history}/>)
             } */}
        </div>
    )
}




