import React, { Component } from "react";
import '../view.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom' 

class SearchBar extends Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        // TO DO: make sure to call
        // callback from parent (<View />) component
        this.props.onTermSubmit(this.state.term)
    }
  render() {
    return (
      <div className="search-bar ui segment">
        <Link to={'/'}>
          <img className="logo" alt="logo" src={logo} width="90px" />
        </Link>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
