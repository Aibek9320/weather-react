import React from 'react'
import errPic from '../../images/error.png'
import './Error.css'

const Error = () => {
  return (
    <div className="error">
      <img src={errPic} alt="error " className='err-pic'/>
      NAME OF CITY 
    </div>
  )
}

export default Error