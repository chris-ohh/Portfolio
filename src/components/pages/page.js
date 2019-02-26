import React, { Component } from 'react';
import SimpleCard from './SimpleCard';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/* default line height from typography headers too short for transparent text*/
const lineHeightOverride = {
  lineHeight: 1.4,
};

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
      //console.log('window width: '+window.innerWidth);
      //console.log('aboutDiv height: '+aboutDiv.offsetHeight);

      if(rows * (230 + 40) > window.innerHeight) {
        projectDiv.style.height = (rows * (230 + 40)).toString()+'px';
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
        } else {
          projectContainer.style.width = (window.innerWidth).toString()+'px';
        }
      } else {
        projectContainer.style.width = (window.innerWidth).toString()+'px';
        aboutContainer.style.width = (window.innerWidth).toString()+'px';
      }
    }

    var onScroll = () => {

      //console.log('scroll position: '+window.pageYOffset);

      var currentScrollPos = window.pageYOffset;

      if(currentScrollPos < projectDiv.offsetTop - 200) {
        color = `rgb(49, 140, 231)`;
      }else if(currentScrollPos >= projectDiv.offsetTop - 200 &&
               currentScrollPos < projectDiv.offsetTop) {
                 //transition
        color = `rgb(${Math.floor(16 + (33/200)*(projectDiv.offsetTop - currentScrollPos))},
          ${Math.floor(52 + (88/200)*(projectDiv.offsetTop - currentScrollPos))},
          ${Math.floor(166 + (65/200)*(projectDiv.offsetTop - currentScrollPos))})`;
      }else if(currentScrollPos >= projectDiv.offsetTop &&
               currentScrollPos < skillsDiv.offsetTop - 200) {
        color = `rgb(16, 52, 166)`;
      }else if(currentScrollPos >= skillsDiv.offsetTop - 200 &&
               currentScrollPos < skillsDiv.offsetTop) {
                 //transition
        color = `rgb(${Math.floor(0 + (16/200)*(skillsDiv.offsetTop - currentScrollPos))},
          ${Math.floor(49 + (3/200)*(skillsDiv.offsetTop - currentScrollPos))},
          ${Math.floor(83 + (83/200)*(skillsDiv.offsetTop - currentScrollPos))})`;
      }else if(currentScrollPos >= skillsDiv.offsetTop) {
        color = `rgb(0, 49, 83)`;
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
            <Typography className="gold" style={lineHeightOverride}
            component="h3" variant="h3" align="center" gutterBottom>
              I'm Chris, welcome to my page!
            </Typography>
            <Typography id="about-text" className="gold" variant="body1" align="center" gutterBottom>
        I'm an aspiring software engineer with an inclination to learn, create, and improve things, constantly.
            </Typography>
          </div>
        </div>
        <div id="projects">
          <div id="card-container">
          <Typography className="gold" style={lineHeightOverride} component="h3"
          variant="h3" align="center" gutterBottom>
            Projects
          </Typography>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Techfolio Designer' description='Electron app for creating simple portfolios, primarily worked on the markdown editor' url='https://github.com/techfolios/techfoliodesigner'></SimpleCard>
            <SimpleCard title='HRS Android App' description="Directory of Hawaii's statutes. Won second place in Hawaii's Annual Code Challenge" url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='React Chat App' description='Simple chat webapp built with react and express. Check it out here: https://react-chat-app-simple.herokuapp.com' url='https://github.com/zhime/react-chat-app'></SimpleCard>
            <SimpleCard title='GraphQL todo' description='GraphiQL client that executes GraphQL queries' url='https://github.com/zhime/GraphQL-Angular-ToDo'></SimpleCard>
            <SimpleCard title='StickAR' description='iOS App that replaces QR codes with images from links' url='https://github.com/jlarobello/StickAR'></SimpleCard>
            <SimpleCard title='ADDTube' description='Youtube distraction blocking userscript' url='https://github.com/zhime/ADDTube'></SimpleCard>
          </div>
        </div>
        <div id="skills">
          <div id="skills-container">
            <Typography className="gold"  style={lineHeightOverride}
            component="h3" variant="h3" align="center" gutterBottom>
              Skills
            </Typography>
            <Typography className="gold" component="h5" variant="h5" align="left" gutterBottom>
              Education: B.S Computer Science at University of Hawaii at Manoa
            </Typography>
            <br/>
            <div className="skills-row">
              <div className="language">
                <Typography className="gold" component="h5" variant="h5" align="left" gutterBottom>
                  Languages
                </Typography>
                <Typography className="gold" variant="body1">
                  Javascript, Typescript, HTML, CSS, Swift, Java
                </Typography>
              </div>
              <div className="framework">
                <Typography className="gold" component="h5" variant="h5" align="left" gutterBottom>
                  Tools
                </Typography>
                <Typography className="gold" variant="body1">
                  React, GraphQL, Express, Node, Angular, Mongoose, Git
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <Typography className="gold" style={lineHeightOverride}
          component="h3" variant="h3" align="center" gutterBottom>
            Contact Me
          </Typography>
          <Typography align="center">
            <div className="contact-row">
              <div className="link">
                <Link href="https://github.com/chris-ohh" target="_blank" rel="noopener noreferrer" className="gold">
                  GitHub
                </Link>
              </div>
              <div className="link">
                <Link href="https://www.linkedin.com/in/christopher-oh" target="_blank" rel="noopener noreferrer" className="gold">
                  LinkedIn
                </Link>
              </div>
              <div className="link">
                <Link href="mailto:chrisoh17@yahoo.com" target="_blank" rel="noopener noreferrer" className="gold">
                  Email
                </Link>
              </div>
            </div>
          </Typography>
        </div>
      </div>

    )
  }
}

export default Page;
