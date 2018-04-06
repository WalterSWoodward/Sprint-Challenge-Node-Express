import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class List extends React.Component {
  state = {
    projects: [],
  };

  render() {
    return (
      <ul>
        {this.state.projects.map(project => 
            <li key={project.id}>{project.name}<br/>{project.description}</li>)}
      </ul>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(error => console.log(error));
  }
}

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
