import React from 'react'

import classes from './index.module.css'
import AnimationWrapper from '../../utils/AnimationWrapper'

function Me (props) {
  let className = classes.Me
  if (props.className) className += ' ' + props.className
  return (
    <div className={className}>
      <h1>我.</h1>
    </div>
  )
}

export default AnimationWrapper(Me)
