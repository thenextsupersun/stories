import React from 'react'

import './markdown.css'
import './highlight.css'
import classes from './index.module.css'

export default class Article extends React.Component {
  state = {}

  componentDidMount () {
    this.fetchArticle(this.props.id)
      .then(article => this.setState({ article }))
  }

  render () {
    const { article } = this.state
    return (article
      ? (
        <React.Fragment>
          <h1 className={classes['Article-title']}>{this.props.title}</h1>
          <div className={'markdown-body'} dangerouslySetInnerHTML={{ __html: article }} />
        </React.Fragment>
      )
      : '载入中...'
    )
  }

  fetchArticle = id => {
    return window
      .fetch(`/articles/${id}.html`)
      .then(res => res.text())
      .catch(err => console.log(err))
  }
}
