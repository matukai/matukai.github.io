import React, { Component } from 'react';

console.log('original',window.innerHeight)

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      winHeight: window.innerHeight,
      winWidth: window.innerWidth
    };
  }
  
  componentWillMount() {
    this.setState({winHeight: window.innerHeight})
  }

  render() {
    console.log('state',this.state.winHeight)
    
    return (

      <div className="wipe">
        <iframe src="https://embed.waze.com/iframe?zoom=12&lat=21.3069&lon=-157.8583" width={this.state.winWidth} height={this.state.winHeight} ></iframe>
      </div>

    )
  }
}

export default Map;