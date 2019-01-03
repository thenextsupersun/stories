window.addEventListener('load', () => {
  let container = document.getElementsByClassName('container')[0]
  let blogList = document.getElementsByClassName('blog-list')[0]
  let blogArticle = document.getElementsByClassName('blog-article')[0]
  let blogTitle = document.getElementsByClassName('blog-title')[0]

  function articleClicked (event) {
    console.log(1111)
    let id = event.target.getAttribute('href')
    window.fetch(`articles/${id}.html`)
      .then(res => {
        return res.text()
      })
      .then(text => {
        blogArticle.innerHTML = text
        blogList.style.display = 'none'
        blogArticle.style.display = 'block'
        blogTitle.textContent = event.target.textContent
        window.scrollBy(0, container.getBoundingClientRect().top)
      })
  }

  // dynamic generating blog list according to list.json
  window.addEventListener('router-blog', () => {
    window.fetch('articles/list.json')
      .then(res => {
        return res.json()
      })
      .then(list => {
        list.sort((a, b) => { if (a.date > b.date) return -1 })
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
          let articleLink = document.createElement('a')
          dateSpan.textContent = each.date.substr(5, 5)
          dateSpan.className = 'blog-article-date'
          articleDiv.appendChild(dateSpan)

          articleLink.textContent = each.title
          articleLink.setAttribute('href', each.id)
          articleLink.addEventListener(`router-${each.id}`, articleClicked)

          articleDiv.appendChild(articleLink)

          articleDiv.className = 'blog-article-link'
          blogList.appendChild(articleDiv)
        }
      })
      .catch(error => {
        console.log(error)
      })
  })
})
