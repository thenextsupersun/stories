import { handleSubRouters } from './h5-router.js'
import { scrollToVideoBottom } from './parallax-scrolling.js'

export function initBlog () {
  let container = document.getElementsByClassName('container')[0]
  let blogList = document.getElementsByClassName('blog-list')[0]
  let blogArticle = document.getElementsByClassName('blog-article')[0]
  let blogTitle = document.getElementsByClassName('blog-title')[0]
  let containers = container.children

  function fetchArticle (id) {
    return window.fetch(`/articles/${id}.html`).then(res => res.text()).catch(err => console.log(err))
  }

  function updateArticle (text) {
    blogArticle.innerHTML = text
    blogList.style.display = 'none'
    blogArticle.style.display = 'block'
  }

  // ajax fetch a list of articles
  function fetchBlogList () {
    return window.fetch('/articles/list.json').then(res => res.json()).catch(err => console.log(err))
  }

  function updateBlogList (list) {
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
      articleLink.setAttribute('href', `/blog/${each.id}`)
      window.addEventListener(`router-${each.id}`, () => {
        fetchArticle(each.id)
          .then(updateArticle)
          .then(() => { blogTitle.textContent = each.title })
      })

      articleDiv.appendChild(articleLink)

      articleDiv.className = 'blog-article-link'
      blogList.appendChild(articleDiv)
    }
  }

  // dynamic generating blog list according to list.json
  let ready = false
  window.addEventListener('router-blog', event => {
    let routers = event.detail
    if (ready) {
      // show article list
      blogList.style.display = 'block'
      blogArticle.style.display = 'none'
      blogTitle.textContent = '博客列表'

      // may show article
      handleSubRouters(routers)
      scrollToVideoBottom()
    } else {
      // haven't render blog list before
      fetchBlogList()
        .then(updateBlogList)
        .then(() => {
          // may show article
          ready = true
          handleSubRouters(routers)
          scrollToVideoBottom()
        })
    }
    for (let j = 0; j < containers.length; ++j) {
      if (containers[j].className !== 'blog-container') {
        containers[j].style.display = 'none'
      } else {
        containers[j].style.display = 'block'
      }
    }
  })
}
