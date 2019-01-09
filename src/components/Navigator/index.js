import React from 'react'

import style from './index.module.css'

export default function Navigator () {
  return (
    <nav className={style.Navigator}>
      <a data-text='博客.' className={style.glitch} href='/blog'> 博客. </a>
      <a data-text='我' className={style.glitch} href='/me'>我.</a>
      <a data-text='生活' className={style.glitch} href='/life'> 生活. </a>
    </nav>
  )
}
