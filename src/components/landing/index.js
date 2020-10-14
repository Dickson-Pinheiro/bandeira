import React from 'react'
import Header from '../global-components//header/header'
import Desafio from './desafio/desafio'
import Client from '../landing/clientes/client'
import Footer from '../global-components/footer/footer'
import Social from '../global-components/social/social'

import './index.css'

export default () => {
    return(
        <div className='home'>
            <Header/>
            <div className='socialHome'>
            <Social />
            </div>
            <Desafio/>
            <Client />
            <Footer />
        </div>
    )
}