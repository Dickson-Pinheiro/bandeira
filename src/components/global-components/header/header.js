import React from 'react'
import Menu from './menu'

import Logo from '../logo/logo'
import './header.css'
export default props => {
    return(
        <div className='header'>
            <div className='containerHeader'>
            <Logo />
            <Menu routeClick='home'/>
            </div>
        </div>
    )
}