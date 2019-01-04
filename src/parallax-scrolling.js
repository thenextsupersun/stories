let bgv = document.getElementsByClassName('bg-video')[0]
let magicHat = document.getElementsByClassName('nav-hat')[0]

export function initScrolling () {
  window.addEventListener('scroll', () => {
    // magic hat
    let top = bgv.getBoundingClientRect().bottom
    if (top <= 0) {
      magicHat.style.display = 'block'
    } else {
      magicHat.style.display = 'none'
    }
  })

  magicHat.onclick = () => {
    window.scrollTo(0, 0)
  }
}

export function scrollToVideoBottom () {
  setTimeout(() => {
    let distanceToScroll = bgv.getBoundingClientRect().bottom
    window.scrollBy(0, distanceToScroll)
  }, 0)
}
