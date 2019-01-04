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

    // magic hat navigation
    magicHat.onclick = () => {
      window.scrollTo(0, 0)
    }
  })
}

export function slowScrollTo (target) {
  setTimeout(() => {
    let distanceToScroll = target.getBoundingClientRect().top
    let timer = setInterval(() => {
      if (Math.abs(distanceToScroll) < 10) {
        clearInterval(timer)
        window.scrollBy(0, distanceToScroll)
      }
      if (distanceToScroll < 0) {
        distanceToScroll += 10
        window.scrollBy(0, -10)
      } else {
        distanceToScroll -= 10
        window.scrollBy(0, 10)
      }
    }, 1)
  }, 0)
}
