import React, { Component } from 'react';
import SimpleCard from './SimpleCard';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <div id="about">About</div>
        <div id="projects">
          <div id="card-container">
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
          </div>
        </div>
        <div id="education">Education</div>
        <div id="skills">Skills</div>
        <div id="interests">Interests</div>
      </div>

    )
  }
}

export default Page;
