import React from 'react';
import { connect } from 'react-redux';
import {
  fetchThumbnails,
  fetchPhotoInfo,
  openModal
} from './store/actionsCreators';
import TitleBar from './gallery/components/titleBar';
import Thumbnails from './gallery/components/thumbnailsGrid';
import PropTypes from 'prop-types';
import PhotoInfoModal from './gallery/components/photoInfoModal';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.props.fetchList();
    window.onscroll = ev => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 50 &&
        !this.props.fetching_status
      ) {
        // you're at the bottom of the page
        this.props.fetchList();
      }
    };
  }

  renderModal() {
    if (this.props.modal_opened && this.props.photoInfo) {
      return (
        <div>
          <PhotoInfoModal
            {...this.props.photoInfo}
            openModal={this.props.openModal}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <TitleBar />
        {this.renderModal()}
        <Thumbnails {...this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  fetching_status: state.fetching_status,
  modal_opened: state.modal_opened,
  photoInfo: state.photoInfo
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchThumbnails()),
  fetchPhotoInfo: id => dispatch(fetchPhotoInfo(id)),
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {};
