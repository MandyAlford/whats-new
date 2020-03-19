import React, { Component } from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

class NewsContainer extends Component {
  constructor() {
    super();
  }

  render () {
    return (
     <section className='news-stories-container'>
        {this.props.currentArticles.map(article => {
          return (
            <NewsArticle articleItem={article}/>
          );
        })}
      </section>
    )
  }
}

export default NewsContainer;
