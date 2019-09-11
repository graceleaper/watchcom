import React from "react"
import VideoItem from "./VideoItem"

/*
    instead of passing in props to 
    the functional component, can use 
    object destructuring
*/
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
        <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
        />
    )
  })
  { /* no longer have to use props.videos.length */ }
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList
