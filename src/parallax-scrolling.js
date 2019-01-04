let bgv = document.getElementsByClassName('bg-video')[0]
let navHat = document.getElementsByClassName('nav-hat')[0]

export function initScrolling () {
  window.addEventListener('scroll', () => {
    // magic hat
    let top = bgv.getBoundingClientRect().bottom
    if (top <= 0) {
      navHat.style.display = 'block'
    } else {
      navHat.style.display = 'none'
    }
  })

  navHat.onclick = () => {
    window.alert('左下角有播放器...')
    // window.scrollTo(0, 0)
  }
}

export function scrollToVideoBottom () {
  setTimeout(() => {
    let distanceToScroll = bgv.getBoundingClientRect().bottom
    window.scrollBy(0, distanceToScroll)
  }, 0)
}
