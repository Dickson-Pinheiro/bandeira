import React from 'react'
import LogoCard from './logo-card' 
import abratem from '../../../assets/Logo_Abratem.png'
import tw from '../../../assets/LogoTW.png'
import astron from '../../../assets/LogoAstron.png'
import uabcam from '../../../assets/LogoUabcam.png'
import travessia from '../../../assets/TravessiadeRitmos.png'

import './client.css'

export default () => {
    return(
        <div className='containerSession2'>
                <div>
                    <h1>Nossos Clientes</h1>
                        <div className='containerClient'>
                         <LogoCard path={abratem}/>
                         <LogoCard path={tw}/>
                         <LogoCard path={astron}/>
                         <LogoCard path={uabcam}/>
                         <LogoCard path={travessia}/>
                       </div>
                </div>
        </div>
    )
}