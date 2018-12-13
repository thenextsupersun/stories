import React from 'react';

import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';



export default class Player extends React.Component {

  componentDidMount() {
    this.player = new APlayer({
      fixed: true,
      container: document.getElementById('player'),
    });

    let url = 'https://api.i-meto.com/meting/api?server=tencent&type=playlist&id=5839267495'
    fetch(url)
      .then(res => res.json())
      .then(songs => {
        this.player.list.add(songs);
      })
  }

  render() {
    
    return (
      <div id="player" > </div>
    )
  }
};
