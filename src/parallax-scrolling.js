window.addEventListener('load', () => {
  let bgv = document.getElementsByClassName('bg-video')[0]
  let bgi = document.getElementsByClassName('bg-img')[0]
  let blogNav = document.getElementsByClassName('blog-nav')[0]
  let blogHead = document.getElementById('blog')

  window.onscroll = () => {
    window.requestAnimationFrame(() => {
      if (bgv.getBoundingClientRect().bottom + 100 < blogHead.getBoundingClientRect().top) {
        // bgv does not reache bottom
        bgv.style.top = window.scrollY + 'px'
        bgi.style.top = window.scrollY + 'px'
      } else if (parseInt(bgv.style.top) > window.scrollY) {
        bgv.style.top = window.scrollY + 'px'
        bgi.style.top = window.scrollY + 'px'
      }

      let top = blogHead.getBoundingClientRect().top
      if (top <= 100) {
        blogNav.style.display = 'block'
      } else {
        blogNav.style.display = 'none'
      }
    })
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
