import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=14")
      .then(res => res.json())
      .then(data => {
        this.setState({ gifs: data.data });
      });
    console.log(this.state.gifs);
  }

  searchHandler = value => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${value}&limit=14&api_key=dc6zaTOxFJmzC`
    )
      .then(res => res.json())
      .then(data => this.setState({ gifs: data.data }));
  };

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm handler={this.searchHandler} />
          </div>
        </div>
        <div className="main-content">
          <GifList gif={this.state.gifs} />
        </div>
      </div>
    );
  }
}
