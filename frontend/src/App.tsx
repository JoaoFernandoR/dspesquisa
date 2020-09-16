import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// CSS
import './App.scss'
// pages
import Home from './pages/Home'
import Tables from './pages/Tables'


const App = () => {
  return (
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tables" component={Tables} exact />
        <Redirect to='/'/>
    </Switch>
  </BrowserRouter>
  )
}


export default App