import React from 'react'
import SearchBar from './SearchBar'
import '../view.css'
import youtube from '../apis/youtube'

class View extends React.Component {

  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit = {this.onTermSubmit} />
      </div>
    )
  }
}

export default View;
