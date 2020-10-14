import React from 'react'
import Header from '../../global-components/header/header'
import Social from '../../global-components/social/social'
import Footer from '../../global-components/footer/footer'
import PortfolioHeader from '../../global-components/portfolioHeader/portfolioHeader'
import PortSession2 from '../../global-components/portSession2/portSession2'
import PortSession3 from '../../global-components/portSession3/portSession3'
import PortSession4 from '../../global-components/portSession4/portSession4'
import setaDireita from '../../../assets/Portfóio_3/setasdireita.png'
import setaEsquerda from '../../../assets/Portfóio_3/setasesquerda1.png'
import mac1 from '../../../assets/Portfóio_3/mac_1.png'
import imac2 from '../../../assets/Portfóio_3/mac.png'
import peca1 from '../../../assets/Portfóio_3/Uabcam pç 1.png'

export default () => {
    return(
        <div>
            <Header />
            <Social distance={280}/>
            <PortfolioHeader setaEsquerda={setaEsquerda} setaDireita={setaDireita} mac1={mac1} project='Uabcam' color1='#ff9328' color2='#ff9e3e'/>
            <PortSession2 imac2={imac2}/>
            
                <PortSession3>
                    <img src={peca1} alt='' />
                    <img src={peca1} alt='' />
                    <img src={peca1} alt='' />
                    <img src={peca1} alt='' />
                </PortSession3>
                <PortSession4 />
                <Footer />
        </div>
    )
}