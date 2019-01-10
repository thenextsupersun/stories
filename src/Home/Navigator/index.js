import React from 'react'
import { Link } from 'react-router-dom'

import classes from './index.module.css'

export default function Navigator (props) {
  let className = classes.Navigator
  if (props.className) className += ' ' + props.className
  return (
    <nav className={className}>
      <Link data-text='博客.' className={classes.glitch} to='/blog'> 博客. </Link>
      <Link data-text='我' className={classes.glitch} to='/me'>我.</Link>
      <Link data-text='生活' className={classes.glitch} to='/life'> 生活. </Link>
    </nav>
  )
}
