import React from 'react';
import Draggable from 'react-draggable';

import Style from './index.module.css';



export default function App({app, handleClose, handleHide, children, width}) {
  return (
    <Draggable handle={`.${Style.bar}`} bounds="body">
      {/* width should be specified by the app instance */}
      <div className={app.state === 'hide' ? Style.hide : Style.show} style={{ width }}>
        <div className={Style.bar}>
          <div onClick={() => handleClose(app.name)}>x</div>
          <div onClick={() => handleHide(app.name)}>-</div>
          <div>{app.name}</div>
        </div>
        {children}
      </div>
    </Draggable>
  )
};
