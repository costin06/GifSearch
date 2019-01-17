import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: '',
    data: Date.now()

  }
  
  onSearchChange = e => {
    if(e.target.value.length>3&& (Date.now()- this.state.data>2000)){
      this.props.handler(e.target.value);
      this.setState({data: Date.now()});

    }
    //this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onKeyUp={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}