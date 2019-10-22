import React, { Component } from 'react';
import Header from './components/Header';
import OurStories from './components/OurStories';

class App extends Component {
  render() {
    return ( 
    <React.Fragment>
      <div className="container-fluid">
      <Header />
      <OurStories />
        </div>
    </React.Fragment>
    )
  }
}

export default App