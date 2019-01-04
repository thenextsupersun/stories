import { initScrolling } from './parallax-scrolling.js'
import { initBlog } from './blog.js'
import { initPlayer} from './player.js'
import { initRouter } from './h5-router.js'

import './css/markdown.css'
import './css/highlight.css'
import './css/basic.css'
import './css/background.css'
import './css/navigator.css'
import './css/blog.css'
import './css/life.css'
import './css/me.css'

window.addEventListener('load', () => {
  initScrolling()
  initBlog()
  initPlayer()
  initRouter(['blog', 'life', 'me'])
})
