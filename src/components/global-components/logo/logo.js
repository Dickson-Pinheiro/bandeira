import React from 'react'
import logo from '../../../assets/Logocertissimotop.png'
import {Link} from 'react-router-dom'
import './logo.css'

export default () => {
    return(
        <Link to='/'><img className='logoHeader'src={logo} alt='Bandeira Comunicação'/></Link>
    )
}