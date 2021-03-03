import React,{Fragment, useContext} from 'react'
import {Route,Redirect} from "react-router-dom"
import HomeVista from './views/HomeVista'
import AdminVista from './views/AdminVista'
import LoginVista from './views/LoginVista'
import { AuthFireContext } from "./context/authFireContext";

export default function Routes(){
  const { userId } = useContext(AuthFireContext);

  return(
    <Fragment>
      <Route path="/" exact component={HomeVista} />
      <Route path="/admin" exact component ={AdminVista}/>
      <Route path="/login" exact component ={LoginVista}/>
      <Route
        path="/"
        exact
        render={() => {
          if(userId == false){
            return <Redirect to='/'/>
          }
        }}
      />
    </Fragment>
  )
}