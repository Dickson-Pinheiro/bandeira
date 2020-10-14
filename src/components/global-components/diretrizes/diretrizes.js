import React from 'react'
import './diretrizes.css'

export default props =>{
    return(
        <div className='diretrizes'>
             <img src={props.img} alt={props.alternative} />
             <div className='containerDiretriz'>
            <h3>{props.title}</h3>
            <p>{props.paragrath}</p>
            </div>
        </div>
       
    )
}