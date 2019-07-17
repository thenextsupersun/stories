import React from 'react'

import InfoBar from './InfoBar'
import ListBar from './ListBar'
import FriendBar from './FriendBar'

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
      <FriendBar friends={[
        {
          name: 'wasamisam',
          description: '专注于21世纪青年启蒙',
          avatar: 'https://avatars2.githubusercontent.com/u/17445431?s=460&v=4',
          url: 'https://wasamisam0119.github.io'
        }
      ]} />
    </div>
  )
}
