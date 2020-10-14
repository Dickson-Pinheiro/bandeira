import React from 'react'
import Header from '../global-components/header/header'
import Footer from '../global-components/footer/footer'
import Ebook from './ebook/ebook'
import capa from '../../assets/E-book/CapasEbook/1.png'
import Social from '../global-components/social/social'

import './index.css'

export default ()=>{
    return(
        <div className='ebookPage'>
            <Header />
            <div className='ebookSocial'><Social distance={350} altura={150}/></div>
            <div className='ebooksHeader'>
                <h1>E-books</h1>
                <p>A Bandeira sempre encontra uma nova forma de ser útil para o seu desafio, e dessa vez não foi diferente. Agora você pode aumentar seus conhecimentos de marketing e gestão de projetos através dos nossos E-books totalmente gratuitos. Vem estudar conosco! </p>
            </div>
            <div className='containerEbooks'>
            <div className='ebooks'>
                <Ebook image={capa}/>
                <Ebook image={capa}/>
                <Ebook image={capa}/>
                <Ebook image={capa}/>
                <Ebook image={capa}/>
                <Ebook image={capa}/>
            </div>
            </div>
            <div className='footerEbooks'><Footer /></div>
        </div>
    )
}