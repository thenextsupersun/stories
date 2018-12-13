import React from 'react';

import Player from '../Player/index.js';
import BlogApp from '../BlogApp/index.js';
import Dock from '../Dock/index.js';

import './index.css';

import BlogPNG from './assets/blog.png';

export default class OS extends React.Component {
  constructor() {
    super();

    this.state ={
      apps: [
        { name: 'blog', icon: BlogPNG, state: 'close', App: BlogApp },
      ]
    }
  }

  handleLaunch = (name) => {
    let apps = this.state.apps.map(app => {
      if (app.name === name) {
        return {...app, state: 'run'}
      }
      return app
    })
    this.setState({apps})
  }

  handleClose = (name) => {
    let apps = this.state.apps.map(app => {
      if (app.name === name) {
        return {...app, state: 'close'}
      }
      return app
    })
    this.setState({apps})
  }

  handleHide = (name) => {
    let apps = this.state.apps.map(app => {
      if (app.name === name) {
        return {...app, state: 'hide'}
      }
      return app
    })
    this.setState({apps})
  }

  render = () => {
    return (
      <React.Fragment>
        {/* bg video with 50% darker */}
        <video id="bg" autoPlay src="https://rishabhp.github.io/bideo.js/night.mp4" loop muted />
        <div id="cover"></div>

        {
          this.state.apps.map(app =>
            app.state === 'close' || 
            <app.App app={app}
              handleClose={this.handleClose} 
              handleHide={this.handleHide} />
          )
        }
        <Player />
        <Dock apps={this.state.apps} onClick={this.handleLaunch} />
      </React.Fragment>
    )
  }
}
