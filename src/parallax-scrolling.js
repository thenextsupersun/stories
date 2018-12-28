window.addEventListener('load', () => {
  let bgv = document.getElementsByClassName('bg-video')[0]
  let bgi = document.getElementsByClassName('bg-img')[0]

  window.onscroll = () => {
    if (window.scrollY < 200) {
      bgv.style.top = window.scrollY + 'px'
      bgi.style.top = window.scrollY + 'px'
    } else if (bgv.style.top !== '200px') {
      bgv.style.top = 200 + 'px'
      bgi.style.top = 200 + 'px'
    }
  }
  let navFakeList = document.getElementsByClassName('nav')[0].children
  for (let i = 0; i < navFakeList.length; ++i) {
    let child = navFakeList[i]
    let targetId = child.getAttribute('href').replace('#', '')
    let target = document.getElementById(targetId)
    child.onclick = event => {
      let distanceToScroll = target.getBoundingClientRect().top
      let timer = setInterval(() => {
        if (Math.abs(distanceToScroll) < 10) {
          clearInterval(timer)
          window.scrollBy(0, distanceToScroll)
        }
        distanceToScroll -= 10
        window.scrollBy(0, 10)
      }, 5)
      event.preventDefault()
    }
  }
})
