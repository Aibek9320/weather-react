import React from 'react'
import axios from 'axios'
import './Form.css'
import search from '../../images/search.png'

const Form = ({setWeather, setError, city, setCity}) => {
    const API_KEY = '179a886807a73bcdc4a14ffcb346770f'
    const searchHandler = (e) => {
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(({data}) => setWeather(data), setError(false))
        .catch((err) => {
            if(!city){
              setError(false)
            }
            else{
              setError(true)
            }
            setWeather(null)
        })
        setCity('')
        
    }
    const inputHandler = (e)=>{
        setCity(e.target.value)
    }
  return (
    <form  className="search-form" onSubmit={(searchHandler)} >
    <input type="text" className="search-form__input" placeholder="Search city" onChange={inputHandler} value={city}/>
    <button type="submit" className="search-form__btn" ><img src={search} alt="search pic" className='search-pic' /></button>
    </form>
  )
}

export default Form