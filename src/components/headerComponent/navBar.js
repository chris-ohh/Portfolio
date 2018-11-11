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
      console.log(currentScrollPos);
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
        <ul className='navBar'>
          <li className="navButton"><Link to="">About</Link></li>
          <li className="navButton"><Link to="">Projects</Link></li>
          <li className="navButton"><Link to="">Education</Link></li>
          <li className="navButton"><Link to="">Skills</Link></li>
          <li className="navButton"><Link to="">Interests</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
