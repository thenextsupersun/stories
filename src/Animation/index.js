import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function FadeAnimationWrapper (WrappedComponent) {
  return function ComponentWithEnterAnimation (props) {
    return (
      <CSSTransition
        in={props.match !== null}
        classNames={{
          enter: 'animated',
          enterActive: 'fadeIn',
          exit: 'animated',
          exitActive: 'fadeOut'
        }}
        timeout={{ enter: 1000, exit: 1000 }}
        mountOnEnter
        unmountOnExit
      >
        <WrappedComponent {...props} />
      </CSSTransition>
    )
  }
}
