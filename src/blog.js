import list from '../articles/menu.json'

window.addEventListener('load', () => {
  let blogMenu = document.getElementsByClassName('blog-menu')[0]
  let blogIframe = document.getElementsByClassName('blog-content')[0].children[1]
  blogIframe.addEventListener('load', () => {
    blogIframe.style.height = blogIframe.contentWindow.document.body.scrollHeight + 'px'
  })

  function enterArticle (id) {
    blogIframe.setAttribute('src', `articles/${id}/${id}.html`)
    blogMenu.style.display = 'none'
    blogIframe.style.display = 'block'
  }

  function articleClicked (event) {
    enterArticle(event.target.getAttribute('data-id'))
  }

  list.sort((a, b) => {
    if (a.date > b.date) return -1
  })

  let year = ''
  for (let each of list) {
    let curYear = each.date.substr(0, 4)
    if (curYear !== year) {
      let yearDiv = document.createElement('div')
      yearDiv.className = 'blog-article-year'
      yearDiv.textContent = curYear
      year = curYear
      blogMenu.appendChild(yearDiv)
    }
    let articleDiv = document.createElement('div')
    let dateSpan = document.createElement('span')
    let articleLink = document.createElement('span')
    dateSpan.textContent = each.date.substr(5, 5)
    dateSpan.className = 'blog-article-date'
    articleDiv.appendChild(dateSpan)

    articleLink.style.cursor = 'pointer'
    articleLink.textContent = each.title
    articleLink.setAttribute('data-id', each.id)
    articleLink.onclick = articleClicked

    articleDiv.appendChild(articleLink)

    articleDiv.className = 'blog-article-link'
    blogMenu.appendChild(articleDiv)
  }

  let hat = document.getElementsByClassName('blog-nav')[0]
  let timer = null
  hat.onclick = event => {
    if (event.detail === 1) {
      // single click
      timer = setTimeout(() => {
        blogIframe.style.display = 'none'
        blogMenu.style.display = 'block'
      }, 500)
    } else {
      clearTimeout(timer)
      window.scrollTo(0, 0)
    }
  }
})
