import React from 'react';

const Form = ({user, handleChange, handleSubmit, sucess,error}) => {
    const disabled = !(user.nombre && user.correo && user.telefono && user.mensaje)
    
    return (
            <div class="container">
                <div class="left">
                 <form onSubmit={handleSubmit} >
                <div>
                <label htmlFor="nombre">Nombre </label>
                <input value={user.nombre} onChange={handleChange} class="form-field animation a1" type="text" name="nombre" placeholder="ingrese su nombre" />
                </div>
                <div>
               <label htmlFor="telefono"> telefono </label>
                <input value={user.telefono} onChange={handleChange} class="form-field animation a2" type="text"  name="telefono" placeholder="ingrese su telefono" />
                </div>
                <div>
                <label htmlFor="correo">Correo</label>
                <input value={user.correo} onChange={handleChange} class="form-field animation a3"  type="email"  name="correo" placeholder="ingrese su correo" />
                </div>
                <div>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea value={user.mensaje} onChange={handleChange} class="form-field animation a4" name="mensaje" placeholder="ingrese un mensaje" />
                <input class="animation a6" disabled={disabled} type="submit"/>
                </div>
                </form>
                </div>        
                <div class="right"></div>
                
        
        
        {sucess && <p>Mensaje enviado correctamente!</p>}
        {error && <p>Ocurrio un error al intentar enviar el mensaje!</p>}
        </div>
    );  
   
}

export default Form;