import React, { Component } from 'react';
import SimpleCard from './SimpleCard';
import Typography from '@material-ui/core/Typography';

class Page extends Component {

  componentDidMount() {

    var projectDiv = document.querySelector('#projects');
    var projectContainer = document.querySelector('#card-container');
    var aboutContainer = document.querySelector('#about-container');
    var aboutDiv = document.querySelector('#about');
    var skillsDiv = document.querySelector('#skills');
    var contactDiv = document.querySelector('#contact');
    var color = ``;

    var onResize = () => {
      var width = projectContainer.clientWidth;
      var numCards = 7;
      var cardWidth = 325;
      var columns = Math.floor(width/cardWidth);
      var rows = Math.ceil(numCards/columns);

      //console.log('projectDiv\'s position: '+projectDiv.offsetTop);
      //console.log('aboutContainer height: '+aboutContainer.offsetHeight);
      //console.log('window height: '+window.innerHeight);
      //console.log('aboutDiv height: '+aboutDiv.offsetHeight);

      if(rows * (230 + 20) > window.innerHeight) {
        projectDiv.style.height = (rows * (230 + 20)).toString()+'px';
      } else {
        projectDiv.style.height = '100vh';
      }

      if(aboutContainer.offsetHeight > window.innerHeight) {
        aboutDiv.style.height = (aboutContainer.offsetHeight).toString()+'px';
      }else {
        aboutDiv.style.height = window.offsetHeight;
      }

      if(window.innerWidth > 770) {
        aboutContainer.style.width = '770px';
        if(window.innerWidth > 1280) {
          projectContainer.style.width = '1150px';
        }
      } else {
        projectContainer.style.width = (window.innerWidth).toString()+'px';
        aboutContainer.style.width = (window.innerWidth).toString()+'px';
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
               currentScrollPos < skillsDiv.offsetTop - 125) {
        color = `rgb(76, 201, 76)`;
      }else if(currentScrollPos >= skillsDiv.offsetTop - 125 &&
               currentScrollPos < skillsDiv.offsetTop) {
                 //transition
        color = `rgb(76, ${76 + skillsDiv.offsetTop - currentScrollPos},
          ${201 - (skillsDiv.offsetTop - currentScrollPos)})`;
      }else if(currentScrollPos >= skillsDiv.offsetTop) {
        color = `rgb(76, 76, 201)`;
      }

      aboutDiv.style.background = color;
      projectDiv.style.background = color;
      skillsDiv.style.background = color;
      contactDiv.style.background = color;
    }

    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
  }

  render() {
    return (
      <div className="page">
        <div id="about">
          <div id="about-container">
            <Typography className="gold" component="h3" variant="h3" align="center" gutterBottom>
              I'm Chris, welcome to my page!
            </Typography>
            <Typography id="about-text" className="gold" variant="body1" align="center" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </div>
        <div id="projects">
          <div id="card-container">
          <Typography className="gold" component="h3" variant="h3" align="center" gutterBottom>
            Projects
          </Typography>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
          </div>
        </div>
        <div id="skills">
          <Typography className="gold" component="h3" variant="h3" align="center" gutterBottom>
            Skills
          </Typography>
        </div>
        <div id="contact">
          <Typography className="gold" component="h3" variant="h3" align="center" gutterBottom>
            Contact Me
          </Typography>
        </div>
      </div>

    )
  }
}

export default Page;
