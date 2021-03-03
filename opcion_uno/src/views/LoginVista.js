import React, {useState, useContext} from 'react' 
import {AuthFireContext} from '../context/authFireContext'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'

export default function LoginVista() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const {userId, setAuthUserId} = useContext(AuthFireContext) 
  
  let history = useHistory()

  const login = (e) => {
    e.preventDefault()
    if(usuario=="Juan"){
      setAuthUserId(true) 
      Swal.fire({ 
        icon:'success',
        title:'Acceso Permitido',
        timer:2000,
        showConfirmButton:false
      })
      .then(()=>{
        history.push('/')
      })
    }
    else{
      Swal.fire({
        icon:'error',
        title:'Acceso denegado',
        timer:2000,
        showConfirmButton:false
      })
    }
    
  }

  return (
   <div>
      <h1>Login</h1>
      <form className="row" onSubmit={(e) => {login(e)}}>    
        <div className="col-sm-12 mb-3">
          <label className="form-label">Usuario</label>
          <input 
            className="form-control" 
            type="text" 
            placeholder="usuario"
            value={usuario}
            onChange={(e) => {setUsuario(e.target.value)}}
            required
          />
        </div>
        <div className="col-sm-12 mb-3">
          <label className="form-label">Password</label>
          <input 
            className="form-control" 
            type="password" 
            placeholder="Ingrese su password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            required
          />
        </div>
        <div className="col-sm-12 mb-3"> 
          <button type="submit" className="btn btn-primary">
            Aceptar
          </button>
        </div>     
      </form>
    </div>
  )
}