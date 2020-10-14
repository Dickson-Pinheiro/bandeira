import React, {useState} from 'react'
import './social.css'
import {FaFacebookF, FaFacebookMessenger, FaWhatsapp, FaInstagramSquare} from 'react-icons/fa'


export default props=> {

    let [color, setColor] = useState('#fff')
    let  margin = props.distance || 260
    let largura = props.largura || 55
    let altura = props.altura || 190

    window.addEventListener('scroll', (e)=> {
        setColor('rgba(255, 255, 255, 0.1')
    })

    return(
        <div className='social' style={{marginTop: margin, width: largura, height: altura, backgroundColor: color}}>
            <FaFacebookF size={20} color='#606060'/>
            <FaInstagramSquare size={20} color='#606060'/>
            <FaWhatsapp size={20} color='#606060'/>
            <FaFacebookMessenger size={20} color='#606060'/>
    
        </div>
    )
}