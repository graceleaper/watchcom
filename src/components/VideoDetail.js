import '../VideoItem.css'
import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    const channelLink = `https://www.youtube.com/channel/${video.snippet.channelId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <div className="channel-info">
                    <h4 className="video-title ui header">{video.snippet.title}</h4>
                    <a className="follow-button" href={channelLink} target="_blank">Follow</a>
                </div>
                <p>Uploaded by <strong>{video.snippet.channelTitle}</strong></p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail