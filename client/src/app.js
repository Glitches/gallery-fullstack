import React from 'react';
import { connect } from 'react-redux';
import { fetchThumbnails } from './store/actionsCreators';
import TitleBar from './gallery/components/titleBar';
import Thumbnails from './gallery/components/thumbnailsGrid';

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
    console.log(this.props);
    return (
      <div>
        <TitleBar />
        <Thumbnails {...this.props.data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchThumbnails())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
