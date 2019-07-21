import React from 'react'
import { Link } from 'react-router-dom'
import './index.module.css'

export default function Navigator (props) {
  return (
    <nav styleName='nav'>
      <a data-text='博客'
        styleName='glitch'
        href='https://www.yuque.com/nzhl'
        rel='noopener noreferrer'
        target='_blank'
      > 博客. </a>
      <Link data-text='我' styleName='glitch' to='/me'>我.</Link>
      <Link data-text='生活' styleName='glitch' to='/life'> 生活. </Link>
    </nav>
  )
}
