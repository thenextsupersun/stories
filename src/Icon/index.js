import React from 'react';

import Style from './index.module.css';

import WechatPNG from './wechat.png';

/**
 * props should include 
 *  1. img
 */
export default function Icon(props) {
  return (
    <div onClick={() => props.onClick(props.name)} className={Style.icon}>
      {/* https://github.com/bokuweb/react-rnd/issues/229 */}
      <img title={props.name} src={props.img || WechatPNG} draggable={false} alt="app icon"></img>
    </div>
  )
}