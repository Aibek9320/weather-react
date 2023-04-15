import React, { useState } from "react";
import axios from "axios";


const App = () => {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('')
    const [error, setError] = useState(false) 
    const API_KEY = '179a886807a73bcdc4a14ffcb346770f'
    const searchHandler = (e) => {
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(({data}) => setWeather(data))
        .catch((err) => {
            setError(true)
            setWeather(null)
        })
        setCity('')
        setError(false)
    }
    const timeGetHandler = (timeStamp) => {
        const time = new Date(timeStamp*1000)
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const sec = time.getSeconds();
        return `${hour} : ${minutes} : ${sec}`
    }
    const inputHandler = (e)=>{
        setCity(e.target.value)
    }
    return (
        <div className="app">
            <div className="app-container">
                <form  className="search-form" onSubmit={(searchHandler)} >
                    <input type="text" className="search-form__input" placeholder="Search city" onChange={inputHandler} value={city}/>
                    <button type="submit" className="search-form__btn" >Search</button>
                </form>
                {!error ? <div className="weather">
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
                    
                </div>:<div className="error">
                        oh no Jonny, incorrect city name!
                    </div>
                }
            </div>
        </div>
    )
}

export default App