import React, { Component } from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

class NewsContainer extends Component {
  constructor() {
    super();
  }

  render () {
    return this.props.localArticles.map(article => {
      return (
          <NewsArticle articleItem={article}/>
      );
    })


  }
}

export default NewsContainer;
