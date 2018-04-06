import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Actions from "./Actions";

const StyledProjects = styled.div``;

export default class Projects extends Component {
  state = {
    projects: [],
    actions: [],
    search: ""
  };

  getProjects = () => {
    axios
      .get("http://localhost:5000/api/projects")
      .then(response => {
        console.log('getProjects')
        this.setState({ projects: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting posts: ${error}`);
      });
  };

  getActions = () => {
    axios
      .get("http://localhost:5000/api/actions")
      .then(response => {
        this.setState({ actions: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting users: ${error}`);
      });
  };

  componentDidMount = () => {
      console.log('componentDidMount')
    this.getProjects();
    this.getActions();
  };

  render() {
    console.log(this.state.projects);
    return (
      <div className="container">
        <div className="row">
          {this.state.projects.map(project => {
            return (
              <div className="col-lg-4 col-md-8 col-sm-12" key={project.id}>
                <Link
                  to={`/projects/${project.id}`}
                  style={{ textDecoration: "none" }}
                  className="card"
                >
                  <div>
                  <Link
                  to={`/projects/${project.id}/actions/`}
                  style={{ textDecoration: "none" }}
                >
                    <h5>{project.name}</h5>
                    </Link>
                    <Actions actions={this.state.actions}/>
                      );
                    })}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
