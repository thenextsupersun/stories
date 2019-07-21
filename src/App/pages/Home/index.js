import React from 'react'

import AnimationWrapper from '../../utils/AnimationWrapper'
import Banner from './Banner'
import Navigator from './Navigator'

import './index.module.css'

function Home () {
  return (
    <div styleName='home'>
      <Banner />
      <Navigator />
    </div>
  )
}

export default AnimationWrapper(Home)
