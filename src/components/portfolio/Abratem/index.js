import React from 'react'
import Header from '../../global-components/header/header'
import Social from '../../global-components/social/social'
import Footer from '../../global-components/footer/footer'
import PortfolioHeader from '../../global-components/portfolioHeader/portfolioHeader'
import PortSession2 from '../../global-components/portSession2/portSession2'
import PortSession3 from '../../global-components/portSession3/portSession3'
import PortSession4 from '../../global-components/portSession4/portSession4'
import setaEsquerda from '../../../assets/Portfolio_2/SetasMarrom_02 cópia.png'
import setaDireita from '../../../assets/Portfolio_2/SetasMarrom_01 cópia.png'
import mac1 from '../../../assets/Portfolio_2/Imac_2_mockup.png'
import imac2 from '../../../assets/Portfolio_2/imac3.png'
import peca1 from '../../../assets/Portfolio_2/Logo Abratem com Xiloway.png'
import peca2 from '../../../assets/Portfolio_2/Site Abratem Portfóilio (Redimensão).png'
import peca3 from '../../../assets/Portfolio_2/Abratem BAnners.png'

export default () => {
    return(
        <div>
            <Header />
            <Social distance={280}/>
            <PortfolioHeader setaEsquerda={setaEsquerda} setaDireita={setaDireita} mac1={mac1} project='Abratem' color1='#de9e26' color2='#e1a83c'/>
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