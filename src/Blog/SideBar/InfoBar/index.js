import React from 'react'
import { Link } from 'react-router-dom'

import classes from './index.module.css'

export default function InfoBar (props) {
  let className = classes['InfoBar']
  if (props.className) {
    className += ` ${props.className}`
  }
  return (
    <div className={className}>
      <Link to='/me'>自我. <span aria-label='haker' role='img'>🕴</span></Link>
      <Link to='/'>首页. <span aria-label='home' role='img'>🏤</span></Link>
      <Link to='/life'>生活. <span aria-label='life' role='img'>😀</span></Link>
    </div>
  )
}
