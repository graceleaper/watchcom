import React from "react";
import VideoItem from "./VideoItem";

/*
    instead of passing in props to 
    the functional component, can use 
    object destructuring
*/
class VideoList extends React.Component {
  constructor({ videos, onVideoSelect }) {
    super({ videos, onVideoSelect });
    this.state = {
      moreVideos: false
    };
  }

  handleClick = () => {
    this.setState({
      moreVideos: !this.state.moreVideos
    });
  };

  render() {
    const allVideos = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });

   const renderedList = allVideos.slice(0, 3)

   const showMore = allVideos.slice(3)

  /* no longer have to use props.videos.length */

    return (
      <div className="ui relaxed divided list">
        {renderedList}
        <button onClick={() => this.handleClick()}>
          {this.state.moreVideos ? <p>Show less</p> : <p>Show more</p>}
        </button>
        {this.state.moreVideos ? showMore : null}
      </div>
    );
  }
}

export default VideoList;
