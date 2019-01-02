import React, { Component } from 'react';
import SimpleCard from './SimpleCard';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <div id="about">About</div>
        <div id="projects">
        <SimpleCard></SimpleCard>
        <SimpleCard></SimpleCard>
        <SimpleCard></SimpleCard>
        Projects</div>
        <div id="education">Education</div>
        <div id="skills">Skills</div>
        <div id="interests">Interests</div>
      </div>

    )
  }
}

export default Page;
