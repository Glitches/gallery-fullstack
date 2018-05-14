import React from 'react';
import { connect } from 'react-redux';
import { fetchThumbnails, fetchPhotoInfo } from './store/actionsCreators';
import TitleBar from './gallery/components/titleBar';
import Thumbnails from './gallery/components/thumbnailsGrid';
import PropTypes from 'prop-types';
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

  render() {
    return (
      <div>
        <TitleBar />
        <Thumbnails {...this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  fetching_status: state.fetching_status
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchThumbnails()),
  fetchPhotoInfo: id => dispatch(fetchPhotoInfo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {};
