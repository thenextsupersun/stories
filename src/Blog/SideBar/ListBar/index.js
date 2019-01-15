import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './index.module.css'

export default function ListBar (props) {
  let list = props.list

  if (!list) return '加载中...'
  let renderResult = []
  let year = ''
  for (let each of list) {
    let curYear = each.date.substr(0, 4)
    if (curYear !== year) {
      renderResult.push(
        <div key={curYear} className={classes['ListBar-year']}>
          {curYear}
        </div>
      )
      year = curYear
    }
    renderResult.push(
      <div key={each.title} className={classes['ListBar-link']}>
        <div className={classes['ListBar-date']}>
          {each.date.substr(5, 5)}
        </div>
        <NavLink to={`/blog/${each.id}`}>{each.title}</NavLink>
      </div>
    )
  }
  return (
    <div className={classes['ListBar']}> {renderResult} </div>
  )
}
