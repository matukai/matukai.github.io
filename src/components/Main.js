import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About'
import Contact from './Contact';

const Main = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </main>
)

export default Main;