import React, { Component } from 'react';
import './NewsArticle.css';


class NewsArticle extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
      <h2>{this.props.articleItem.headline}</h2>
      <img src={this.props.articleItem.img} alt={this.props.articleItem.description}/>
      {this.props.articleItem.url}</div>
    );
  }
}



export default NewsArticle;
