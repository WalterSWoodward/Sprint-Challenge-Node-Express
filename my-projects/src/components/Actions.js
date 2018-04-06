import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Projects from './Projects';

class Actions extends React.Component {
  render() {
    return (
      <ul>
        {this.props.actions.map(action => <li key={action.id}>{action.name}</li>)}
      </ul>
    );
  }
}

export default Actions;


