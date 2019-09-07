import axios from 'axios'
const KEY = 'AIzaSyALzngx9PcLeeGkn5Q03K98iPYaDSHIgK4'

// Google 'youtube api search' or go to https://developers.google.com/youtube/v3/docs/search/list
// base url and default parameters
// append search query after baseURL
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY // need to append API key to our query
    }
})
