import React from 'react';

const Info = props => {
  console.log('info', props);
  if (props) {
    const info = props.resp.photo;
    return <div>{info}</div>;
  }
};

export default Info;
