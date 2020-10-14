import React from 'react'
import {NavLink} from 'react-router-dom'

import './portSession4.css'

export default ()=> {
    return (
        <div className='portSession4'>
        <div className='portSession4Container'>
            <div className='portSession4titleAndParagrath'>
                <h1>Quer que a Bandeira solucione <br/>seu desafio também?</h1>
                <p>A gestão de imagem de uma empresa deve ser uma atividade essencial, pois pode impactar até os resultdos financeiros.</p>
            </div>
            <div className='buttonsPortfolio'>
                <NavLink to='/orcamento'>Quero falar com um consultor</NavLink>
                <NavLink to='/orcamento' className='button2'>Quero receber um orçamento</NavLink>
            </div>
        </div>
    </div>
    )
}