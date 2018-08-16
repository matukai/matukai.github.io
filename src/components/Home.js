import React, {Component} from 'react';
import OpenSign from './OpenSign';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="home">
          <OpenSign />
      </div>
    )
  }
}

export default Home;