import React from 'react'
import {Link} from 'react-router-dom'
import  forma from '../../assets/LandingPage/Mestra/Forma_1.png'
import logo from '../../assets/Logocertissimotop.png'
import manDownload from '../../assets/LandingPage/Mestra/homem_mestra_1.png'
import setas from '../../assets/LandingPage/Mestra/SetaslandingPage1.png'
import seta from '../../assets/LandingPage/Mestra/SetaslandingPage2.png'
import notebooks from '../../assets/LandingPage/MockupComputador_1.png'
import engrenagem from '../../assets/LandingPage/Expertise_1.png'
import FormPageDwonload from './formDownload/form'
import Expertises from './expertises/expertises'
import Footer from '../global-components/footer/footer'

import './index.css'

export default () => {
    return(
        <div className='pageDownload'>
            
            <div className='headerContinerLanding'>
            <img className='background' src={forma} alt='' />
            <Link to='/'><img className='logoDownloadHeader' src={logo} alt='' /></Link>
               
                 <div className='textDownloadHeader'>
                     <div>
                        <h1>Faça download<br/>
                        agora do e-book</h1>
                        <p>A gestão da imagem de uma empresa deve ser uma atividade essencial, pois pode impactar até os resultados financeiros.</p>
                        </div>
                 </div>
                 <img className='manDownload' src={manDownload} alt='' />
                 <img className='setasLanding' src={setas} alt='' />

            </div>
            <div className='pageDownloadSession2'>
                <FormPageDwonload top={380}/>
                <img className='imgSession2Download2' src={notebooks} alt=''/>
                <img className='imgSession2Download' src={seta} alt='' />
                    <div className='contentDownloadTitle2'>
                        <h1>Expertises que<br/> setão adquiridas</h1>
                        <p>A gestão da imagem de uma empresa deve ser uma atividade essencial, pois pode impactar até os resultados financeiros.</p>
                    </div>
                </div>
                <div className='expertises'>
                    <div className='contentExpertises'>
                        <Expertises img={engrenagem} title='Inbound'/>
                        <Expertises img={engrenagem} title='Branding'/>
                        <Expertises img={engrenagem} title='Marketing'/>
                        <Expertises img={engrenagem} title='Gestão'/>
                    </div>
                </div>
                <Footer />
        </div>
    )
}