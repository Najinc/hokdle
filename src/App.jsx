import React from 'react'
import { Route, Switch } from 'wouter'
import Home from './views/Home'
import Infinity from './views/Infinity'
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/infinity" component={Infinity}/>
      </Switch>
    </>
  )
}

export default App
