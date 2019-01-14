import React from 'react'

import './markdown.css'
import './highlight.css'
import classes from './index.module.css'

export default class Article extends React.Component {
  state = {}

  componentDidMount () {
    this.fetchArticle(this.props.id)
      .then(article => this.setState({ article }))
    window.scrollTo(0, 0)
  }

  render () {
    const { article } = this.state
    return (article
      ? (
        <div className={this.props.className}>
          <h1 className={classes['Article-title']}>{this.props.title}</h1>
          <div className={'markdown-body'} dangerouslySetInnerHTML={{ __html: article }} />
        </div>
      )
      : (
        <div className={this.props.className}>
          载入中...
        </div>
      )
    )
  }

  fetchArticle = id => {
    return window
      .fetch(`/articles/${id}.html`)
      .then(res => res.text())
      .catch(err => console.log(err))
  }
}
