import React from 'react'

import InfoBar from './InfoBar'
import ListBar from './ListBar'

import classes from './index.module.css'

export default function SideBar (props) {
  let className = classes['SideBar']
  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <div className={className}>
      <InfoBar />
      <ListBar list={props.list} />
    </div>
  )
}
