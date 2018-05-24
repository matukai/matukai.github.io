import React, { Component } from 'react';
import Nav from './components/NavBar';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>landing page</h1>
        <Main />
      </div>
    );
  }
}

export default App;
