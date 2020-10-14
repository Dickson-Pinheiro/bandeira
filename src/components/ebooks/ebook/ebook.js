import React from 'react'
import { Link } from 'react-router-dom'

import './ebook.css'

export default props => {
    return(
        <div className='containerEbook'>
            <img src={props.image} alt=''/>
            <Link to='ebooks/download'>Baixar E-book</Link>
        </div>
    )
}