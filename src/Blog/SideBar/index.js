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
          name: '嘉兴侠客山姆赵',
          description: '我讨厌语法糖, 搞不好会有牙疼的风险',
          avatar: 'https://avatars2.githubusercontent.com/u/17445431?s=460&v=4',
          url: 'https://github.com/wasamisam0119'
        },
        {
          name: '嘉兴侠客山姆赵',
          description: '我讨厌语法糖, 搞不好会有牙疼的风险',
          avatar: 'https://avatars2.githubusercontent.com/u/17445431?s=460&v=4',
          url: 'https://github.com/wasamisam0119'
        },
        {
          name: '嘉兴侠客山姆赵',
          description: '我讨厌语法糖, 搞不好会有牙疼的风险',
          avatar: 'https://avatars2.githubusercontent.com/u/17445431?s=460&v=4',
          url: 'https://github.com/wasamisam0119'
        }
      ]} />
    </div>
  )
}
