import React, {useState} from 'react'
import Form from '../formorcamento/form'
import './condicionalform.css'


export default props => {
    let [verificarForm, setVerificarForm] = useState(true)

    const alterContent = () => {
        setVerificarForm(false)
    }

    return(
        <div>
            {verificarForm ? <Form iconLupa = {props.iconLupa} iconwpp={props.iconwpp} cartaform={props.cartaform} bonecoform={props.bonecoform} alterContent={alterContent}/> :
             <h2 className='sendForm'>Aaaah... Adoramos o seu desafio!<br/>
             Já já entraremos em contato com você</h2>}
        </div>
    )
}