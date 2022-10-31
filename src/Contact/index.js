import Form from "./components/Form"
import React from "react"
import {useState} from "react";


const Contact = () => {
    const [user, setUser] = useState ({nombre: "", correo: "", telefono: "", mensaje: "" })
    const[sucess, setSucess]= useState(false)
    const[error, setError]= useState(false)

    const handleChange = (event) =>{
        setSucess(false)
        setError(false)
        const prop = event.target.name
        const value = event.target.value
        setUser({...user, [prop]: value}) //spread operator
    }

    
    return(
        <Form user={user} handleChange={handleChange} sucess={sucess} error={error}/>
    )
}


export default Contact;