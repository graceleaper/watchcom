import React from 'react'
import SearchBar from './SearchBar'
import '../view.css'

class View extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    )
  }
}

export default View;
