import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import '../view.css'
import youtube from '../apis/youtube'

class View extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async (term) => {
    // contains information about the data that came back
    // console.log(response)

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response)

    this.setState({videos: response.data.items})
  }

  // video object will be video we're fetching from YouTube API
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit = {this.onTermSubmit} />
        {/* {this.state.videos.length} videos */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos} />
      </div>
    )
  }
}

export default View;
