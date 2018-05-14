import React from 'react';

const Info = props => {
  console.log('info', props);
  if (props) {
    const info = props.resp.photo;
    return (
      <div className="container" onClick={() => props.openModal()}>
        <p>{info.description._content}</p>
        <p>{info.id}</p>
        <p>{info.owner.realname}</p>
      </div>
    );
  }
};

export default Info;
