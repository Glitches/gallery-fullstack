import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Thumbnail extends React.PureComponent {
  // console.log('Thumbnail ', props);
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    let spinnerDisplay = {
      display: 'block'
    };
    let photoDisplay = {
      display: 'none'
    };
    if (this.state.imageStatus === 'loaded') {
      photoDisplay = {
        display: 'block'
      };
      spinnerDisplay = {
        display: 'none'
      };
    }
    const photourl = this.props.photo.url;
    const id = this.props.photo.id.toString();
    const fetchInfo = id => {
      this.props.openModal();
      this.props.fetchPhotoInfo(id);
    };

    return (
      <div onClick={() => fetchInfo(id)} key={id} className="thumbnail__item">
        <a>
          <img style={spinnerDisplay} src="./Loading_icon.gif" />
          <img
            key={id}
            style={photoDisplay}
            src={photourl}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
        </a>
      </div>
    );
  }
}

export default Thumbnail;

Thumbnail.proptypes = PropTypes.shape({
  id: PropTypes.number,
  url: PropTypes.string
}).isRequired;

// onClick={id => this.props.fetchPhotoInfo(id)}
