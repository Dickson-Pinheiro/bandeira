import React from 'react'
import setaBranca from '../../../assets/Portfolio_2/seta_branca_2_port.png'

import './portfolioHeader.css'

export default props => {
    const seta = props.seta || setaBranca
    return(
    <div className='portfolioHeader' style={{background: `linear-gradient(45deg, ${props.color1} 0%, ${props.color2} 45%, ${props.color1} 70%)`}}>
        <div className='circle'></div>
        <div className='arrowsAndMac'>
            <img src={props.setaEsquerda} alt='' />
            <img src={props.setaDireita} alt='' />
        </div>
        <div className='centralContainer'>
            <img className='central' src={props.mac1} alt=''/>
        </div>
        <div className='arrowWhite'>
            <div>
                <h1>{props.project}</h1>
                <p>A gestão de imagem de uma empresa deve ser uma atividade essencial, pois pode impactar até os resultdos financeiros.</p>
            </div>
            <img src={seta} alt='' />
        </div>
    </div>
    )
}