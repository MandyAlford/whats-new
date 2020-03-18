import React, { Component } from 'react';
import './NewsArticle.css';


class NewsArticle extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <section className='news-article-story'>
        <h2>{this.props.articleItem.headline}</h2>
        <img src={this.props.articleItem.img}/>
        <p>{this.props.articleItem.description}</p>
        <a href={this.props.articleItem.url}>Click here for the story</a>
      </section>
    );
  }
}



export default NewsArticle;
