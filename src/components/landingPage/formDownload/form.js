import React from 'react'
import './form.css'

export default props => {
    return(
        <div className='formDownload' style={{top: props.top, left: props.left}}>
            <h1>Preencha os <br/>campos abaixo</h1>
            <form>
                <div className='containerFormDownload'>
                <label for='name'>NOME</label>
                <input id='name' type='text' required />
                </div>

                <div className='containerFormDownload'>
                <label for='email'>E-MAIL EMPRESARIAL</label>
                <input id='email' type='email' required />
                </div>

                <div className='containerFormDownload'>
                <label for='phone'>TELEFONE</label>
                <input id='phone' type='tel' required />
                </div>
                    <input type='submit' value='Receber material' />
            </form>
        </div>
    )
}