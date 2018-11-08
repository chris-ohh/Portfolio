import React, { Component } from 'react';
//import { Menu } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  state = { activeItem: 'home' }

  render() {
    const { activeItem } = this.state

    return (
      <header>
        <ul id="headerButtons">
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
