import React from 'react'

import classes from './index.module.css'

export default function Banner (props) {
  let className = classes.Banner
  if (props.className) className += ' ' + props.className
  return (
    <div className={className}>
      <span>我不是你想象中的智敏老弟.</span>
    </div>
  )
}
