import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const json = require('./resume.json');
import Sidebar from './Components/Sidebar';
import Summary from './Components/Summary';
import Work from './Components/Work';
import Education from './Components/Education';


class App extends Component {

  constructor(){
    super()
    console.log(json)
  }

  render() {
    return (
      <div className="view-table">
          <div className="view-row">
        <Sidebar jsonObj={json.basics}/>
        <div className="view-name">
          <Summary jsonObj={json.basics}/>
          <Work jobs={json.work} />
          <Education schools={json.education} />
          </div>
    </div>
  </div>
    );
  }
}

export default App;
