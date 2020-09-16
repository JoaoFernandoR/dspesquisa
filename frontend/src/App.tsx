import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// CSS
import './App.scss'
// Pages
import Home from './pages/Home'
import Tables from './pages/Tables'
// Components
import Header from './components/Header'

const App = () => {
  return (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/tables" component={Tables} exact />
      <Redirect to='/'/>
    </Switch>
  </BrowserRouter>
  )
}


export default App