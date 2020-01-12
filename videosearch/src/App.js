import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import youtubeSearch from './components/youtube-api';
import VideoDetail from './components/video_detail';
// import to be used in your App component
import './index.css';
import './style.scss';



class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  
    youtubeSearch('pixar').then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });

    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {

    return (
      <div className="App">
        <SearchBar id="search-bar" onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
