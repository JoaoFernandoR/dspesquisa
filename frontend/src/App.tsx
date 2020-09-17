import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// CSS
import './App.scss'
// Pages
import Home from './pages/Home'
import Tables from './pages/Tables'
import Charts from './pages/Charts'
// Components
import Header from './components/Header'

const App = () => {
  return (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/tables" component={Tables} exact />
      <Route path="/charts" component={Charts} exact />
      <Redirect to='/'/>
    </Switch>
  </BrowserRouter>
  )
}


export default App