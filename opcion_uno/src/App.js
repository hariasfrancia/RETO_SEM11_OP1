
import React from 'react'
import Routes from './routes'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import Barra from './components/Barra'
import AuthContextProvider from "./context/authFireContext";


export default function App(){
  return(
    <Router>
       <AuthContextProvider>
        <Barra/>
          <div className="container">
            <Switch>
              <Routes/>
            </Switch>
          </div>
      </AuthContextProvider>      
    </Router>
  )
}