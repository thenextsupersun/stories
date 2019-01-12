import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './index.module.css'

export default function SideBar (props) {
  let { className, list } = props
  return (
    <div className={className}>
      <div className={classes['SideBar-list']}>
        {renderList(list)}
      </div>
    </div>
  )
}

const renderList = list => {
  if (!list) return '加载中...'
  let renderResult = []
  let year = ''
  for (let each of list) {
    let curYear = each.date.substr(0, 4)
    if (curYear !== year) {
      renderResult.push(
        <div key={curYear} className={classes['SideBar-article-year']}>
          {curYear}
        </div>
      )
      year = curYear
    }
    renderResult.push(
      <div key={each.title} className={classes['SideBar-article-link']}>
        <div className={classes['SideBar-article-date']}>
          {each.date.substr(5, 5)}
        </div>
        <NavLink to={`/blog/${each.id}`}>{each.title}</NavLink>
      </div>
    )
  }
  return renderResult
}
