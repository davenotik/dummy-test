import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Cool. Rad.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          <Button/>
        </header>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <a href="http://abc.me" className="Button">A button</a>
    );
  }
}

export default App;
