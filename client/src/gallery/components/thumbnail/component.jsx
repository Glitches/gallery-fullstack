import React from 'react';
import './style.scss';
import './';

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
    return (
      <div className="thumbnail__item">
        <a>
          <img style={spinnerDisplay} src="./Loading_icon.gif" />
          <img
            style={photoDisplay}
            src={this.props.photo}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
        </a>
      </div>
    );
  }
}

export default Thumbnail;
