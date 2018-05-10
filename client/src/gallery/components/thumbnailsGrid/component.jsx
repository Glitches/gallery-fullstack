import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class ThumbnailsGrid extends PureComponent {
  constructor(props) {
    super(props);
  }

  createGrid() {
    this.props.photos.map(thumb => {
      return <img key="a" src={thumb} />;
    });
  }

  componentDidMount() {}

  render() {
    return <div className="thumbnails__grid">{() => this.createGrid()}</div>;
  }
}

ThumbnailsGrid.PropTypes = {
  data: PropTypes.array.isRequired
};
