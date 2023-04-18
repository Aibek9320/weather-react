import React, { useState } from "react";
import Form from "../Form/Form";
import WeatherData from "../WeatherData";
import Error from "../Error";
import './App.css'
import firstPic from '../../images/firstPic.png'
import textPic from '../../images/textPic.png'


const App = () => {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('')
    const [error, setError] = useState(false)
    
    return (
        <div className="app">
            <div className="app-container">
                
                <Form 
                setWeather={setWeather} 
                setError={setError}
                city={city}
                setCity={setCity}
                />
                {!error && !weather ? 
                <div>
                    <img src={firstPic} alt="write yout city name" className="firstPic"/>
                    <img src={textPic} alt="text pic"  className="textPic"/>
                </div>
                :
                !error ? <WeatherData weather={weather}/>:
               <Error/>
                }
            </div>
        </div>
    )
}

export default App