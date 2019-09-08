import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import '../view.css'
import youtube from '../apis/youtube'

class View extends React.Component {

  state = {
    videos: []
  }

  onTermSubmit = async (term) => {
    // contains information about the data that came back
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({videos: response.data.items})
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit = {this.onTermSubmit} />
        {/* {this.state.videos.length} videos */}
        <VideoList videos = {this.state.videos} />
      </div>
    )
  }
}

export default View;
