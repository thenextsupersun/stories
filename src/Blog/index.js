import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SideBar from './SideBar'
import Article from './Article'

import classes from './index.module.css'

export default class Blog extends React.Component {
  state = {}

  componentDidMount () {
    this.fetchBlogList().then(list =>
      this.setState({ list: list.sort((a1, a2) => a2 - a1) })
    )
  }

  render () {
    let list = this.state.list
    let className = classes.Blog
    if (this.props.className) className += ' ' + this.props.className
    return (
      <div className={className}>
        <SideBar list={list} className={classes['Blog-sidebar']} />
        <div className={classes['Blog-content']}>
          {list ? this.renderArticleRouter() : null}
        </div>
      </div>
    )
  }

  fetchBlogList = () => {
    return window
      .fetch('/articles/list.json')
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  renderArticleRouter = () => {
    return (
      <Switch>
        {this.state.list.map(each => (
          <Route
            key={each.title}
            path={`/blog/${each.id}`}
            render={() => <Article {...each} />}
          />
        ))}
        <Route
          render={() => (
            <div>
              <h3>听完这首《加州旅馆》再看我的博客好吗?</h3>
              <br />
              <iframe src='//player.bilibili.com/player.html?aid=717741&cid=1052159&page=1'
                scrolling='no' border='0' frameBorder='no' framespacing='0'
                title='hotel-california' allowFullScreen width='700px' height='500px' />
            </div>
          )}
        />
      </Switch>
    )
  }
}
