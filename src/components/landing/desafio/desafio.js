import React from 'react'
import {Link} from 'react-router-dom'

import man from '../../../assets/homem.png'
import icon from '../../../assets/Botão_1.png'
import seta from '../../../assets/setas_1.png'
import './desafio.css'

export default () => {
    return(
        <div className='container'>
            <div className='title'>
                <h1>Qual é<br/>
                    o seu<br/>
                    desafio?</h1>
                    <h1 className='desafioTitle2'>Qual é
                    o seu<br/>
                    desafio?</h1>
            </div>

            <div className='man'>
   <img src={man} alt='homen' />
            </div>
            <div className='textAndIcon'>
            <h3>fale<br/>
                    com um<br/>
                    consultor</h3>
                <Link to='/orcamento'><img src={icon} alt=''/></Link>
            </div>
            <div className='seta'>
                <img src={seta} alt='setas' />
            </div>
        </div>
    )
}