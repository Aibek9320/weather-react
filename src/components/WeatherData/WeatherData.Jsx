import React from 'react'

const WeatherData = ({weather}) => { 
    const timeGetHandler = (timeStamp) => {
        const time = new Date(timeStamp*1000)
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const sec = time.getSeconds();
        return `${hour} : ${minutes} : ${sec}`
    }
  return (
    <div className="weather">
        <div className="weather__main-info" >
           {
            weather && (
                <>
                <div> {timeGetHandler(weather.dt)}</div>
                <div>  {weather.name}, {weather.sys.country}</div>
                <div>{weather.weather[0].description}</div>
                <div>
                <img src={ `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
                {(weather.main.temp -273.15).toFixed(1)}°C
                </div>
            </>
            )
           }
        </div>
        <div className="weather__secondary">

        </div>
        
    </div>
    
   
  )
}

export default WeatherData