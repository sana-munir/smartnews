import React from 'react';

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source}= props;
    return (
        <div className='my-3 '>
          <div className='container' style={{ height: '600px', width:'430px',display:'flex'  }}>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:1}}>
    {source}
    <span className="visually-hidden">unread messages</span>
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
      </div>
    )
}

export default NewsItem;
