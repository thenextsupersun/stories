import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Life from './pages/Life'
import Me from './pages/Me'
import Home from './pages/Home'

import 'animate.css'
import './base.css'
import './index.module.css'

function App () {
  return (
    <BrowserRouter>
      <div styleName='app'>
        <Route path='/life' children={Life} />
        <Route path='/me' children={Me} />
        <Route path='/' exact children={Home} />
      </div>
    </BrowserRouter>
  )
}

export default App
