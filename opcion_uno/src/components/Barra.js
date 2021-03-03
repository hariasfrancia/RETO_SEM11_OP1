import React,{useState,useContext} from 'react'
import {useHistory} from "react-router-dom"
import {AuthFireContext} from "../context/authFireContext"
import Swal from 'sweetalert2'
import BarraAdmin from "./BarraAdmin"
import BarraCliente from "./BarraCLiente"

export default function Barra(){
  const [estaColapsado, setEstaColapsado] = useState(true);
  const manejarColapso = () => setEstaColapsado(!estaColapsado);
  const {userId, setAuthUserId} = useContext(AuthFireContext)
  let history = useHistory()
  
  const salir = () => {
    Swal.fire({
      icon:"warning",
      title:"Desea Salir?",
      showConfirmButton:true,
      confirmButtonColor: '#292b2e',
      confirmButtonText:'Si',
      showCancelButton:true,
      cancelButtonColor: '#d33',
      cancelButtonText:"No"
    })
    .then((result)=>{
      if(result.isDismissed === true){
        return
      }
     
      setAuthUserId(null)
        Swal.fire({        
          icon:'success',
          title:"Se deslogueo exitosamente",
          showConfirmButton:false,
          timer:2000
        })
        .then(()=>{
          history.push('/')
        })
     
    })
  }

  return(
    <div className="navbar navbar-expand-lg  navbar-light" style={{backgroundColor: '#9ea9ad'}}>
      <div className="container">
        <span className="navbar-brand mb-0 h1">React</span>
           <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="topnav">   
                {userId == true ? (<BarraAdmin salir={salir} />) : <BarraCliente/>}
           </div> 
      </div>
    </div>
  )
}