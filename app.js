const rp = require('request-promise')
const fs = require('fs')

let list = []
rp.get({
  uri: 'https://api.github.com/repos/livoras/blog/issues',
  headers: { 'User-Agent': 'Request-Promise' },
  json: true
}).then(articles => {
  for (let article of articles) {
    list.push({
      title: article.title,
      id: article.id,
      date: article.created_at
    })
    fs.writeFile(`./articles/markdowns/${article.id}.md`, article.body, () => console.log(article.id))
  }
  fs.writeFile('./articles/list.json', JSON.stringify(list), () => console.log('list.json'))
})
