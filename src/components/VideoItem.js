import '../VideoItem.css'
import React from 'react'

// props.video is an object with information about an individual video
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => {onVideoSelect(video)}} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="video-content content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem