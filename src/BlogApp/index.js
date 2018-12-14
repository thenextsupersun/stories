import React from 'react';

import ReactMarkdown from 'react-markdown';

import App from '../App/index.js';
import Style from './index.module.css';



export default class BlogApp extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      currentMarkdown: '正在努力地加载...'
    }
  }

  componentDidMount() {
    const Articles_URL = 'https://api.github.com/repos/nzhl/stories/contents/articles?ref=gh-pages';
    fetch(Articles_URL)
      .then(res => res.json())
      .then(json => {
        this.setState({articles: Object.values(json)}, () => this.loadArticle(0));
      })
  }

  render() {
    const AppWidth = "90%";
    return (
      <App {...this.props} width={AppWidth}>
        <div className={Style.container} >
          <div>{this.state.articles.map((each, index) => 
            <div className={Style.entry} key={each.name} onClick={() => this.loadArticle(index)} >{each.name}</div>
          )}</div>
          <div> <ReactMarkdown source={this.state.currentMarkdown} /> </div>
        </div>
      </App>
    )
  }

  loadArticle = index => {
    if(this.state.articles[index].html) {
      this.setState({currentMarkdown: this.state.articles[index].html})
    }
    this.setState({currentMarkdown: '正在努力地加载...'})
    let url = this.state.articles[index].download_url
    fetch(url)
      .then(res => {
        let reader = res.body.getReader()
        return reader.read()
      }).then(({done, value}) => {
        let text = new TextDecoder('utf-8').decode(value)
        let articles = this.state.articles.map((each, index2) => {
          if(index2 === index) {
            return Object.assign({}, each, {html: text})
          }
          return each;
        })
        this.setState({currentMarkdown: text, articles: articles})
      })
  }
}
