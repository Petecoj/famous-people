import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Star from './components/Star/Star'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Star/>
        <p className="App-intro">
        
        </p>
      </div>
    );
  }
}

export default App;
