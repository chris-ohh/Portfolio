import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './components/pages/page.js';
import NavBar from './components/headerComponent/navBar.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="page" exact path="/" component={Page} />
        </div>
      </Router>
    )
  }
}

export default App;
