let currentDisplay = 'blog'

window.addEventListener('load', () => {
  let bgv = document.getElementsByClassName('bg-video')[0]
  let container = document.getElementsByClassName('container')[0]
  let magicHat = document.getElementsByClassName('nav-hat')[0]
  let blogList = document.getElementsByClassName('blog-list')[0]
  let blogArticle = document.getElementsByClassName('blog-article')[0]
  let blogTitle = document.getElementsByClassName('blog-title')[0]

  window.onscroll = () => {
    window.requestAnimationFrame(() => {
      // parallax scrolling video
      if (bgv.getBoundingClientRect().bottom + 100 < container.getBoundingClientRect().top) {
        // bgv does not reache bottom
        bgv.style.top = window.scrollY + 'px'
      } else if (parseInt(bgv.style.top) > window.scrollY) {
        bgv.style.top = window.scrollY + 'px'
      }

      // magic hat
      let top = bgv.getBoundingClientRect().bottom
      if (top <= 0) {
        magicHat.style.display = 'block'
      } else {
        magicHat.style.display = 'none'
      }
    })
  }

  // slow scroll navigation
  let navFakeList = document.getElementsByClassName('nav')[0].children
  for (let i = 0; i < navFakeList.length; ++i) {
    let child = navFakeList[i]
    let targetId = child.getAttribute('href').replace('#', '')
    let target = document.getElementsByClassName(`${targetId}-container`)[0]
    child.addEventListener('click', event => {
      let containers = document.getElementsByClassName('container')[0].children
      for (let j = 0; j < containers.length; ++j) {
        if (containers[j] !== target) {
          containers[j].style.display = 'none'
        } else {
          containers[j].style.display = 'block'
          currentDisplay = event.target.getAttribute('href').replace('#', '')
        }
      }
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
    })
  }

  // magic hat navigation
  let timer = null
  magicHat.onclick = event => {
    if (event.detail === 1) {
      // single click
      timer = setTimeout(() => {
        if (currentDisplay === 'blog') {
          blogArticle.style.display = 'none'
          blogList.style.display = 'block'
          blogTitle.textContent = '博客列表'

          // back to blog title
          window.scrollBy(0, bgv.getBoundingClientRect().bottom)
        }
      }, 500)
    } else {
      clearTimeout(timer)
      window.scrollTo(0, 0)
    }
  }
})
