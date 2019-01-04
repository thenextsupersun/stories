import { scrollToVideoBottom } from './parallax-scrolling.js'

export function initLife () {
  let container = document.getElementsByClassName('container')[0]
  let containers = container.children

  // let ready = false
  window.addEventListener('router-life', () => {
    for (let j = 0; j < containers.length; ++j) {
      if (containers[j].className !== 'life-container') {
        containers[j].style.display = 'none'
      } else {
        containers[j].style.display = 'block'
      }
    }
    scrollToVideoBottom()
  })
}
