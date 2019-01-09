import React, { Component } from 'react';
import SimpleCard from './SimpleCard';

class Page extends Component {

  onresize() {
    var projectDiv = document.querySelector('#projects');
    var containerDiv = document.querySelector('#card-container');
    var width = containerDiv.clientWidth;
    var numCards = 7;
    var cardWidth = 325;
    var columns = Math.floor(width/cardWidth);
    var rows = Math.ceil(numCards/columns);

    if(rows * (230 + 20) > window.innerHeight) {
      projectDiv.style.height = (rows * (230 + 20)).toString()+'px';
    } else {
      projectDiv.style.height = '100vh';
    }

    if(window.innerWidth > 1280) {
      containerDiv.style.width = '1150px';
    } else {
      containerDiv.style.width = (window.innerWidth).toString()+'px';
    }
  }

  componentDidMount() {
    this.onresize();
    window.addEventListener('resize', this.onresize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onresize);
  }

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
