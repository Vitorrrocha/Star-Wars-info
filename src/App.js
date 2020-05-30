import React, { Component } from 'react';
import Axios from 'axios';
import List from './List';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      films: [],
    }
    this.getFilms = this.getFilms.bind(this)
  }

  getFilms(){
    return Axios.get("https://swapi.dev/api/films/?callback=foo")
    .then((response) => {
      console.log(response.data.results);
      this.setState( {films: response.data.results}) 
    })
  }

  componentDidMount(){
    this.getFilms() 
  }

  render(){
    const {films} = this.state;
    return (
      <div className="App">
        <List films={films} />
      </div>
    )
  }
}

export default App;
