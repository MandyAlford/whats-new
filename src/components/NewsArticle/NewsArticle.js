import React, { Component } from 'react';
import './NewsArticle.css';


class NewsArticle extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <section className='news-article-story'>
        <div className='image-container'>
          <img src={this.props.articleItem.img}/>
        </div>
        <h2>{this.props.articleItem.headline}</h2>
        <p>{this.props.articleItem.description}</p>
        <div className='article-link'>
          <a href={this.props.articleItem.url}>Click here for the story</a>
        </div>
      </section>
    );
  }
}



export default NewsArticle;
