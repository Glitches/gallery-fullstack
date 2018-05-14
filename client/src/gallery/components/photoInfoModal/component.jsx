import React from 'react';
import './style.scss';
import Info from '../infos';

const PhotoInfoModal = props => {
  console.log('modal', props);
  const url = `https://farm${props.resp.photo.farm}.staticflickr.com/${
    props.resp.photo.server
  }/${props.resp.photo.id}_${props.resp.photo.secret}.jpg`;
  return (
    <div className="container__modal" onClick={() => props.openModal()}>
      <img src={url} alt={props.title} />
      <Info {...props} />
    </div>
  );
};

export default PhotoInfoModal;
