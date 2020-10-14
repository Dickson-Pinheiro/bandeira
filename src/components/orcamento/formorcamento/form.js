import React from 'react'

import './form.css'

export default props => {



    return(


<form>
    <div className='form'>
        <label for='desafio'>O meu<br/>desafio é...</label>
        <input type='text' placeholder='Logotipo; Website, Redes Sociais...' id='desafio' />
        <img src={props.iconLupa} alt=''/>
    </div>

    <div className='form'>
        <label for='nome'>Nome</label>
        <input type='text' id='nome' />
        <img src={props.bonecoform} alt=''/>
    </div>

    <div className='form'>
        <label for='email'>Melhor E-mail</label>
        <input type='email' id='email' />
        <img src={props.cartaform} alt=''/>
    </div>

    <div className='form'>
        <label for='celular'>Celular</label>
        <input type='tel' id='celular' />
        <img src={props.iconwpp} alt=''/>
    </div>

    <input type='submit' onClick={props.alterContent} value='Bandeira, aceita meu desafio.'/>
                        
</form>
)
}