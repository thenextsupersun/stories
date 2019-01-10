import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function EnterAnimationWrapper (WrappedComponent, animation) {
  return function (props) {
    return (
      <CSSTransition
        in={props.match !== null}
        classNames={{
          enter: 'animated',
          enterActive: animation,
          exit: 'animated',
          exitActive: 'fadeOutUp'
        }}
        timeout={{ enter: 1000, exit: 0 }}
        mountOnEnter
        unmountOnExit
      >
        <WrappedComponent {...props} />
      </CSSTransition>
    )
  }
}
