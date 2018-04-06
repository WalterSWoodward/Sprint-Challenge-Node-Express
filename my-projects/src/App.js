import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Actions from './components/Actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id/actions" component={Actions} />
        </div>
      </Router>
    );
  }
}

export default App;
