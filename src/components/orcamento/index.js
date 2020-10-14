import React from 'react'
import Header from '../global-components/header/header'
import Social from '../global-components/social/social'
import Footer from '../global-components/footer/footer'
import CondicionlForm from './condicionalform/condicionalform'
import man2 from '../../assets/Orcamento/HomemNoCirculo_1.png'
import redArrow from '../../assets/Orcamento/SetaOrcamento_1.png'
import iconLupa from '../../assets/Orcamento/lupaicon.png'
import iconwpp from '../../assets/Orcamento/wappformulario_1.png'
import cartaform from '../../assets/Orcamento/Cartaformulario_1.png'
import bonecoform from '../../assets/Orcamento/bonecoformulario_1.png'

import './index.css'


export default ()=>{
    return(
        <div className='orcamento'>
            <Header />
            <div className='containerOrcamento'>
            <div className='socialOrcamento'><Social distance={-220}/></div>
            <div className='left'> 
                
                <img className = 'man2'  src={man2} alt='' />
                <img src={redArrow} alt='' />
            </div>
            <div className='titleAndForm'>
                    <h1>A agência<br/>
                    que aceita<br/>
                    seu desafio</h1>
        
                    <CondicionlForm iconLupa = {iconLupa} iconwpp={iconwpp} cartaform={cartaform} bonecoform={bonecoform}/>
            </div>
            </div>
            <div className='footerOrcamento'>
            <Footer />
            </div>
        </div>
    )
}