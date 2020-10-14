import React, {useState} from 'react'
import './menu.css'
import {NavLink} from 'react-router-dom'

export default () => {
    const [bar2SDisplay, setBar2Display]= useState('block')

    const alterDisplay = () => {
        if (bar2SDisplay === 'block') {
            setBar2Display('none')
        } else {
            setBar2Display('block')
        }
    }
    const toggleMenu = ()=> {
        const elementMenu = document.querySelector('.contentMenuMobile')
        const bar1 = document.querySelector('.bar1')
        const bar3 = document.querySelector('.bar3')
        const root = document.querySelector('#root')
        root.classList.toggle('pageOverflow')
        bar3.classList.toggle('inclina-45')
        bar1.classList.toggle('inclina45')
        elementMenu.classList.toggle('menuHidden')
        alterDisplay()
    }

    return(
        <div className='controllerMenu'>
        <ul className='menu'>
            <li ><NavLink exact activeClassName ='active_class' to='/'>Home</NavLink></li>
            <li ><NavLink exact activeClassName ='active_class' to='/quem-somos'>Quem Somos</NavLink></li>
            <li style={{cursor: 'pointer'}} className='itemMenu'>Portifólio
            <ul className='itemMenu'>
                    <li ><NavLink exact activeClassName ='active_class' to='/abratem'>Abratem</NavLink></li>
                    <li ><NavLink exact activeClassName ='active_class' to='/tw'>Team Week</NavLink></li>
                    <li ><NavLink exact activeClassName ='active_class' to='/uabcam'>Uabcam</NavLink></li> 
                </ul>
            </li>
            <li ><NavLink exact activeClassName ='active_class' to='/orcamento'>Orçamento</NavLink></li>
            <li ><NavLink exact activeClassName ='active_class' to='/ebooks'>E-book</NavLink></li>
        </ul>
        <div className='menuIcon' onClick={toggleMenu}>
            <span className='bar1'></span>
            <span className='bar2' style={{display: bar2SDisplay}}></span>
            <span className='bar3'></span>
        </div>
        <div className='contentMenuMobile'>
        <ul className='mobileMenu'>
            <li ><NavLink to='/'>Home</NavLink></li>
            <li ><NavLink to='/quem-somos'>Quem Somos</NavLink></li>
            <li style={{cursor: 'pointer'}} className='itemMenuMobile'>Portifólio
            <ul className='mobileLink'>
                    <li ><NavLink to='/abratem'>Abratem</NavLink></li>
                    <li ><NavLink to='/tw'>Team Week</NavLink></li>
                    <li ><NavLink to='/uabcam'>Uabcam</NavLink></li> 
                </ul>
            </li>
            <li ><NavLink to='/orcamento'>Orçamento</NavLink></li>
            <li ><NavLink to='/ebooks'>E-book</NavLink></li>

            
        </ul>
        </div>
        </div>
    )
}