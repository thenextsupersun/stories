import list from '../articles/menu.json'

window.addEventListener('load', () => {
  let blogList = document.getElementsByClassName('blog-list')[0]
  let blogArticle = document.getElementsByClassName('blog-article')[0]
  blogArticle.addEventListener('load', () => {
    blogArticle.style.height = blogArticle.contentWindow.document.body.scrollHeight + 'px'
  })

  function enterArticle (id) {
    blogArticle.setAttribute('src', `articles/${id}/${id}.html`)
    blogList.style.display = 'none'
    blogArticle.style.display = 'block'
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
      blogList.appendChild(yearDiv)
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
    blogList.appendChild(articleDiv)
  }
})
