import React, { Component } from 'react';
import { Fade, Loop } from 'react-animation-components';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: ''
    };
  }

  test () {
    setInterval(function(){}, 5000)
  }

  random () {
    const arr = [800,400,600];
    console.log(arr[Math.floor(Math.random()*arr.length)])
    return arr[Math.floor(Math.random()*arr.length)];
  }

  render() {
    return (
      <div className="openSign">
        <Loop in interval={this.random()} onComplete={this.test()}>
          <Fade>
            <img src="https://www.publicdomainpictures.net/pictures/90000/velka/neon-open-sign.jpg" alt="OPEN" height="300px" width="300px" />
          </Fade>
        </Loop>
      </div>
    )
  }
}

export default Title;