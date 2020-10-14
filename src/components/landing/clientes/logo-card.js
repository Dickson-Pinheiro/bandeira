import React from 'react'
import './logo-card.css'

export default props => {
    return(
        <div className='containerLogo'>
            <img src={props.path} alt='Logo'/>
        </div>
    )
}