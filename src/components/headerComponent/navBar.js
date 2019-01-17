import React, { Component } from 'react';
//import { Menu } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';


class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.prevScrollpos = window.pageYOffset;
  }

  componentDidMount() {

    window.addEventListener('scroll', () => {
      var currentScrollPos = window.pageYOffset;

      if (this.prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = "0";
      } else {
        document.querySelector('header').style.top = "-50px";
      }
      this.prevScrollpos = currentScrollPos;
    })
  }

  render() {
    //const { activeItem } = this.state;

    return (
      <header>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </header>
    )
  }
}

export default NavBar;
