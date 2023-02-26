import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { provide } from '@hilma/tools'
import Routing from './Router'

function App() {

  return (
    <div className="App">
      <Routing/>
    </div>
  )
}

export default provide()(App)
