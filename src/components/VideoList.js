import React from "react"
import VideoItem from "./VideoItem"

/*
    instead of passing in props to 
    the functional component, can use 
    object destructuring
*/
const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem />
  })
  { /* no longer have to use props.videos.length */ }
  return <div>{renderedList}</div>
}

export default VideoList
