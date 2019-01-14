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
      <div className={classes['InfoBar-avatar']}>
        <a href='https://github.com/nzhl/stories'>
          <img className={classes['InfoBar-avatar-fork']} src='https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png' alt='Fork me on GitHub' />
        </a>
        <img alt='avatar' className={classes['InfoBar-avatar-image']} src='https://avatars0.githubusercontent.com/u/16397293?s=150&v=4' />
        <h4>ZM.ZHANG</h4>
      </div>
      <div className={classes['InfoBar-nav']}>
        <Link to='/me'>真我. <span aria-label='haker' role='img'>🕴</span></Link>
        <Link to='/'>首页. <span aria-label='home' role='img'>🏤</span></Link>
        <Link to='/life'>生活. <span aria-label='life' role='img'>😀</span></Link>
      </div>
    </div>
  )
}
