import React, { Component } from 'react';
import SimpleCard from './SimpleCard';

class Page extends Component {

  componentDidMount() {

    var projectDiv = document.querySelector('#projects');
    var containerDiv = document.querySelector('#card-container');
    var aboutDiv = document.querySelector('#about');
    var educationDiv = document.querySelector('#education');
    var color = ``;

    var onResize = () => {
      var width = containerDiv.clientWidth;
      var numCards = 7;
      var cardWidth = 325;
      var columns = Math.floor(width/cardWidth);
      var rows = Math.ceil(numCards/columns);

      //console.log('projectDiv\'s position: '+projectDiv.offsetTop);

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

    var onScroll = () => {

      //console.log('scroll position: '+window.pageYOffset);

      var currentScrollPos = window.pageYOffset;

      if(currentScrollPos < projectDiv.offsetTop - 125) {
        color = `rgb(201, 76, 76)`;
      }else if(currentScrollPos >= projectDiv.offsetTop - 125 &&
               currentScrollPos < projectDiv.offsetTop) {
                 //transition
        color = `rgb(${76 + projectDiv.offsetTop - currentScrollPos},
          ${201 - (projectDiv.offsetTop - currentScrollPos)}, 76)`;
      }else if(currentScrollPos >= projectDiv.offsetTop &&
               currentScrollPos < educationDiv.offsetTop - 125) {
        color = `rgb(76, 201, 76)`;
      }else if(currentScrollPos >= educationDiv.offsetTop - 125 &&
               currentScrollPos < educationDiv.offsetTop) {
                 //transition
        color = `rgb(76, ${76 + educationDiv.offsetTop - currentScrollPos},
          ${201 - (educationDiv.offsetTop - currentScrollPos)})`;
      }else if(currentScrollPos >= educationDiv.offsetTop) {
        color = `rgb(76, 76, 201)`;
      }

      aboutDiv.style.background = color;
      projectDiv.style.background = color;
      educationDiv.style.background = color;
    }

    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
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
