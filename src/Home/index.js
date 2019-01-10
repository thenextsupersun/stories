import React from 'react'

import Banner from './Banner'
import Navigator from './Navigator'

import classes from './index.module.css'

function Home (props) {
  let className = classes['Home']
  if (props.className) className += ' ' + props.className
  return (
    <div className={className}>
      <Banner className={classes['Home-upper']} />
      <Navigator className={classes['Home-lower']} />
    </div>
  )
}

export default Home
