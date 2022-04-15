import React from 'react';
import './style.scss';

const Newss = (props) => {
    const {image, title, body} = props;
  return (
    <div className="row news-body">
      <div className="col-md-4 news-pict-div">
        <img src={image} alt="img" className="news-pict" />
      </div>
      <div className="col-md-8 news-headline">
        <h1 className="news-title">{title}</h1>
        <p className="news-content">{body}</p>
      </div>
    </div>
  );
};

export default Newss;
