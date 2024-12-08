import React from 'react'
import { Route, Switch } from 'wouter'
import mainPage from './views/mainPage'
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={mainPage}/>
      </Switch>
    </>
  )
}

export default App
