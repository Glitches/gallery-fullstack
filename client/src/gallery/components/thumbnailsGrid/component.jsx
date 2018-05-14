import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';
import Thumbnail from '../thumbnail';
import { fetchPhotoInfo } from '../../../store/actionsCreators';

class ThumbnailsGrid extends Component {
  constructor(props) {
    super(props);
  }

  createGrid() {
    // console.log(this.props);
    if (this.props.urlList && this.props) {
      return this.props.urlList.map(thumb => {
        return (
          <div key={thumb.id.toString()}>
            <Thumbnail
              photo={thumb}
              openModal={this.props.openModal}
              fetchPhotoInfo={this.props.fetchPhotoInfo}
            />
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

const mapDispatchtoProps = dispatch => ({
  fetchPhotoInfo: id => dispatch(fetchPhotoInfo(id))
});

export default connect(null, mapDispatchtoProps)(ThumbnailsGrid);
