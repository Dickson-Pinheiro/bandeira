import React from 'react'
import Header from '../../global-components/header/header'
import Social from '../../global-components/social/social'
import PortfolioHeader from '../../global-components/portfolioHeader/portfolioHeader'
import PortSession2 from '../../global-components/portSession2/portSession2'
import PortSession3 from '../../global-components/portSession3/portSession3'
import PortSession4 from '../../global-components/portSession4/portSession4'
import Footer from '../../global-components/footer/footer'
import setaBranca from '../../../assets/Portfolio_1/Seta_branca_02.png'
import setaEsquerda from '../../../assets/Portfolio_1/SetasRoxa_02.png'
import mac1 from '../../../assets/Portfolio_1/Mockup_Imac_1.png'
import setaDireita from '../../../assets/Portfolio_1/SetasRoxa_01.png'
import imac2 from '../../../assets/Portfolio_1/imac_2_a.png'
import peca1 from '../../../assets/Portfolio_1/Peça1_TW.png'
import peca2 from '../../../assets/Portfolio_1/Peça_2_TW.png'
import peca3 from '../../../assets/Portfolio_1/Peça3_TW.png'


import './index.css'


export default () => {
    return(
        <div>
            <Header />
            <Social distance={280}/>
            <PortfolioHeader seta={setaBranca} setaEsquerda={setaEsquerda} setaDireita={setaDireita} mac1={mac1} project='Team Week 2017' color1='rgba(102,41,119,1)' color2='rgba(114,58,130,1)'/>
            <PortSession2 imac2={imac2}/>
            
                <PortSession3>
                    <img src={peca1} alt='' />
                    <img src={peca2} alt='' />
                    <img src={peca3} alt='' />
                    <img src={peca1} alt='' />
                </PortSession3>
                <PortSession4 />
                <Footer />
        </div>
    )
}