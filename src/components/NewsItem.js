import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source}= this.props;
    return (
        <div className='my-3 '>
        <div className="card" style={{display:'flex', height: '100%', flexDirection:'column'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:1}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text mt-2"><small className='text-muted'>By {author} on {new Date(date).toLocaleString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
