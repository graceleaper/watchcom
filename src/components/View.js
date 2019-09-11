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

  async componentDidMount() {
    this.onTermSubmit('lofi')
  }

  onTermSubmit = async (term) => {
    // contains information about the data that came back
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response)

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
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
        <div className="ui grid descriptors">
          <div className="videos-display ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default View;
