import React from 'react';
import './style.scss';

const Thumbnail = props => {
  console.log('Thumbnail ', props);
  return (
    <div className="thumbnail__item">
      <a>
        <img src={props.photo} />
      </a>
    </div>
  );
};

export default Thumbnail;
