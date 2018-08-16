import React, { Component } from 'react';
import Nav from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <div className="App-header"><Nav /></div>
          <div className="App-main"><Main /></div>
          <div className="App-footer"><Footer /></div>
      
      </div>
    );
  }
}

export default App;