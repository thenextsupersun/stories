import React from 'react'

import classes from './index.module.css'

export default function Blog (props) {
  let className = classes.Blog
  if (props.className) className += ' ' + props.className
  return (
    <div className={className}>
      <h1>博客.</h1>
    </div>
  )
}
