import React, { Component } from 'react';
import Header from './components/Header';
import OurStories from './components/OurStories';
import SuccessProjects from './components/SuccessProjects';
import Team from './components/Team';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Header />
          <OurStories />
          <SuccessProjects />
          <Team />
          <Projects />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
