let validRouters = null
// handle global router according to the href
export function handleRouters () {
  let location = window.location
  let routers = location.href.replace(location.origin, '').split('/').filter(router => router !== '')
  if (validRouters.indexOf(routers[0]) !== -1) {
    window.dispatchEvent(new window.CustomEvent(
      `router-${routers.shift()}`, { detail: routers, bubbles: true })
    )
  } else {
    // default page
    window.dispatchEvent(
      new window.CustomEvent(`router-life`, { detail: [], bubbles: true }))
    window.history.pushState(null, null, '/life')
  }
}

// handle next sub-router
export function handleSubRouters (routers) {
  if (!routers || routers === []) return
  window.dispatchEvent(
    new window.CustomEvent(`router-${routers.shift()}`, { detail: routers, bubbles: true }))
}

export function initRouter (validGlobalRouters) {
  validRouters = validGlobalRouters
  // prevent the defaut behaviour of link
  window.addEventListener('click', event => {
    let elem = event.target
    if (elem.tagName !== 'A' || elem.hasAttribute('real-href')) return

    event.preventDefault()
    let href = elem.getAttribute('href')
    window.history.pushState(null, null, href)
    handleRouters()
  })

  // when user click history btn: prev / next
  window.addEventListener('popstate', () => {
    handleRouters()
  })

  handleRouters()
}
