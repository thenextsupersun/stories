import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import EnterAnimationWrapper from '../Animation'
import Blog from '../Blog'
import Life from '../Life'
import Me from '../Me'
import Home from '../Home'

import 'animate.css'
import './base.css'
import classes from './index.module.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.Blog = EnterAnimationWrapper(Blog, 'slideInLeft')
    this.Life = EnterAnimationWrapper(Life, 'slideInRight')
    this.Me = EnterAnimationWrapper(Me, 'slideInUp')
    this.Home = EnterAnimationWrapper(Home, 'fadeIn')
  }
  render () {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Route path='/blog' children={props => <this.Blog {...props} />} />
          <Route path='/life' children={props => <this.Life {...props} />} />
          <Route path='/me' children={props => <this.Me {...props} />} />
          <Route path='/' exact children={props => (<this.Home {...props} />)} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
