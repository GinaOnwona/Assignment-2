import React from 'react';


function History (props) {
    return (
        <div>
            <p>{props.history.name}</p>
            <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png/`} />
            <p>{props.history.weather.temp}</p>
        </div>
    )
}


export default History;