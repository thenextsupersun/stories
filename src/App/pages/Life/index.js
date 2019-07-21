import React from 'react'

import classes from './index.module.css'
import AnimationWrapper from '../../utils/AnimationWrapper'

function Life (props) {
  let className = classes.Life
  if (props.className) className += ' ' + props.className
  return (
    <div className={className}>
      <h1>生活.</h1>
    </div>
  )
}

export default AnimationWrapper(Life)
