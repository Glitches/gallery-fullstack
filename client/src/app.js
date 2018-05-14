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
  }
  render() {
    window.onscroll = ev => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        // you're at the bottom of the page
        this.props.fetchList();
      }
    };
    if (this.props.data.urlList) {
      return (
        <div>
          <TitleBar />
          <Thumbnails {...this.props.data} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchThumbnails())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
