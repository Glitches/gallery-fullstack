import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Thumbnail from '../thumbnail';

export default class ThumbnailsGrid extends Component {
  constructor(props) {
    super(props);
  }

  createGrid() {
    if (this.props.urlList && this.props) {
      return this.props.urlList.map(thumb => {
        return (
          <div>
            <Thumbnail photo={thumb} />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="thumbnails__grid">{this.createGrid(this.props)}</div>
    );
  }
}

ThumbnailsGrid.propTypes = {
  urlList: PropTypes.array.isRequired
};
