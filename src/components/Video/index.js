import React from 'react'

export default function Video (props) {
  const defaultProps = {
    src: '//player.bilibili.com/player.html?aid=2284228&cid=3561252&page=1',
    width: '100%',
    height: '100%'
  }
  Object.assign(defaultProps, props)
  return (
    <iframe {...defaultProps} title='xD'
      scrolling='no' border='0' frameBorder='no' framespacing='0' />
  )
}
