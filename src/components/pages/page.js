import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <div id="about">About</div>
        <div id="projects">Projects</div>
        <div id="education">Education</div>
        <div id="skills">Skills</div>
        <div id="interests">Interests</div>
      </div>

    )
  }
}

export default Page;
