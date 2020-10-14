import React from 'react'
import Header from '../global-components/header/header'
import imgHeader from '../../assets/quem-somos/Topo.png'
import './index.css'
import Diretrizes from '../global-components/diretrizes/diretrizes'
import missao from '../../assets/quem-somos/Valores_1.png'
import visao from '../../assets/quem-somos/Valores_2.png'
import valores from '../../assets/quem-somos/Valores_3.png'
import Footer from '../global-components/footer/footer'


export default ()=>{
    let mi='Encontrar soluções criativas para os problemas de comunicação do nossos clientes, sonhando junto a eles e integrando-nos aos seus projetos'
    let vi ='Ser a agência líder em lembrança em Natal, reconhecidamente confiável e amada, destacando-se pelo uso de tecnologia avançada e por equipes sempre comprometidas em solucionar os sonhos dos clientes e da comunidade na qual se instale.'
    let va='Sonhos. Paixão. Vanguarda. Alta Performance.'
    return(
        <div>
            <Header />
            <div className='session1Sobre'>
                <img src={imgHeader} alt='Bandeirantes' />
                <h1>Quem são<br />os bandeirantes?</h1>
                <p>A Bandeira Comunicação é uma agência de propaganda focada diretamente na realização dos sonhos dos nossos clientes. Embasados em uma cultura organizacional de resolução de desafios, nós Bandeirantes não medimos esforços para desbravar as melhores soluções para seu empreendimento, pois, afinal de contas, fincar uma bandeira de conquista em uma desafiante montanha é o sonho de todo empreendedor, e ter ao lado uma agência parceira que sonha junto com você, é a forma mais viável para alcançar tal sonho. E aí? Quando irá nos chamar para sua aventura? A Bandeira já está pronta!</p>
            </div>
            <div className='containerDiretrizes'>
                < Diretrizes img={missao} title='Missão' paragrath={mi} />
                < Diretrizes img={visao} title='Visão' paragrath={vi} />
                < Diretrizes img={valores} title='Valores' paragrath={va} />
            </div>
            <Footer />
        </div>

        
    )
}