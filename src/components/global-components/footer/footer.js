import React from 'react'
import logo2 from '../../../assets/Logo_2.png'
import copy from '../../../assets/c.png'
import setas2 from '../../../assets/Setas2.png'
import './footer.css'

export default () => {
    return(
        <footer>
            <div className='footer1'>
                <img src={logo2} alt='Logo'/>
                <p>
                    <img src={copy} alt='copyrhigth'/>
                    2018 Bandeira Comunicação. Todos os direitos reservados.
                </p>
            </div>
            <div className='setas'>
                <img src={setas2} alt='Setas'/>
            </div>
        </footer>
    )
}