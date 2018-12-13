import React from 'react';

import Icon from '../Icon/index.js';

import Style from './index.module.css';

const IconWidth = 90


export default function Dock(props) {
  let apps = props.apps || [];

  let containerStyle =  {
    width: IconWidth * apps.length,
  }


  return (
    <nav className={Style.nav}>
      <div style={containerStyle}>
        {apps.map(app =>
          <Icon img={app.icon} name={app.name} key={app.name} onClick={props.onClick} />)}
      </div>
    </nav>
  )
}