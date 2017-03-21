import React, { Component } from 'react';
import './App.css';
const json = require('./resume.json');
import Sidebar from './Components/Sidebar';
import Summary from './Components/Summary';
import Work from './Components/Work';
import Education from './Components/Education';
import References from './Components/References';
import Skills from './Components/Skills';
import Footer from './Components/Footer';



class App extends Component {

  render() {
    return (
      <div className="view-table">
          <div className="view-row">
        <Sidebar jsonObj={json.basics}/>
        <div className="view-name">
          <Summary jsonObj={json.basics}/>
          <Work jobs={json.work} />
          <Education schools={json.education} />
          <Skills skills={json.skills} />
          <References references={json.references} />
        </div>
    </div>
    <Footer />
  </div>
    );
  }
}

export default App;
