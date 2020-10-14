import React from 'react'
import './expertises.css'

export default props => {
    return(
        <div className='expertiseContainer'>
            <img src={props.img} alt='' />
            <h2>{props.title}</h2>
        </div>
    )
}