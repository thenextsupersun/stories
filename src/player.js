import APlayer from 'aplayer'
import 'aplayer/dist/APlayer.min.css'

let player = null

export function initPlayer () {
  player = new APlayer({
    fixed: true,
    container: document.getElementById('player')
  })

  let url = 'https://api.i-meto.com/meting/api?server=tencent&type=playlist&id=5839267495'
  window.fetch(url)
    .then(res => res.json())
    .then(songs => {
      player.list.add(songs)
    })
}
