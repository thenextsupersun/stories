import React from 'react'

import Navigator from '../Navigator'
import Banner from '../Banner'
// import Video from '../Video'

import style from './index.module.css'

function Home () {
  return (
    <div className={style['Home']}>
      <div> <Banner /> </div>
      <div className={style['wrapper']}> <Navigator /> </div>
      {/* <div> <Video /> </div> */}
    </div>
  )
}

export default Home
