import React from 'react'
import './WeatherData.css'
import sunset from '../../images/sunset.png'
import sunrise from '../../images/sunrise.png'
import wind from '../../images/wind.png'
import humidity from '../../images/humidity.png'
import pressure from '../../images/pressure.png'
import feelsLike from '../../images/feelsLike.png'

const WeatherData = ({weather}) => { 
    const timeGetHandler = (timeStamp) => {
        const time = new Date(timeStamp*1000)
        const hour = time.getHours();
        const minutes = time.getMinutes();
        // const sec = time.getSeconds();
        return `${hour} : ${minutes}`
    }
  return (
    <div className="weather">
        <div className="weather__main-info" >
           {
            weather && (
                <>
                <div className='weather__main-info-div_first' > {timeGetHandler(weather.dt)} | {weather.name}, {weather.sys.country}</div>
                <div className='weather__main-info-div'>  </div>
                <div className='weather__main-info-div'>{weather.weather[0].description}</div>
                <div className='weather__main-info-div_second'>
                <img src={ `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
                <div>{(weather.main.temp -273.15).toFixed(1)}°C</div>
                </div>
            </>
            )
           }
        </div>
        <div className="weather__secondary">
           <div><img src={sunrise} width={23} alt="" /> - {timeGetHandler(weather.sys.sunrise)}</div>
           <div><img src={sunset} width={23} alt="" /> - {timeGetHandler(weather.sys.sunset)}</div>
           <div><img src={wind} width={23} alt="" /> - {weather.wind.speed} m/s</div>
           <div><img src={feelsLike} width={23} alt="" /> - {(weather.main.feels_like -273.15).toFixed(1)}°C</div>
           <div><img src={humidity} width={23} alt="" /> - {weather.main.humidity}%</div>
           <div><img src={pressure} width={23} alt="" /> - {weather.main.pressure} hPa</div>
        </div>
        
    </div>
    
   
  )
}

export default WeatherData