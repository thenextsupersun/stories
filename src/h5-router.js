window.addEventListener('load', () => {
  let as = document.getElementsByTagName('a')
  let location = window.location
  let states = location.href.replace(location.origin).split('/').slice(1)

  if (states.length !== 0) {
    window.dispatchEvent(
      new window.CustomEvent(`router-${states.shift()}`),
      { bubbles: true }
    )
  }

  for (let i = 0; i < as.length; ++i) {
    let a = as[i]
    if (a.hasAttribute('real-href')) { continue }
    let href = a.getAttribute('href')
    a.addEventListener('click', e => {
      console.log(123)
      e.preventDefault()
      window.history.pushState(href, null, href)
      a.dispatchEvent(new window.CustomEvent(`router-${href}`, { bubbles: true }))
    })
  }

  window.addEventListener('statepush', e => {
    window.dispatchEvent(new window.CustomEvent(`router-${e.state}`, { bubbles: true }))
  })
})
