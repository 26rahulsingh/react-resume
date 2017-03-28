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
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props);
    // Set state to empty object for now
    this.state = ({})
  }

  // Download my Resume.json file from GitHub Gist address, extract keys basics and projects
  // and set to state.
  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/Velua/afddfb4c94ed7e3ed2bd66c28989674b/raw/')
      .then((response) => {
        this.setState({ 
          basics: response.data.basics,
          projects: response.data.projects,
          education: response.data.education,
          skills: response.data.skills,
          references: response.data.references
        });

      })
  }

  render() {

    console.log(this.state)
    const { basics, projects, education, skills, references } = this.state

    // Conditional render so nothing is shown till the data is received.
    if (basics == null) {
      return (
        <div>Loading..</div>
      )
    }

    return (
      <div className="view-table">
          <div className="view-row">
        <Sidebar jsonObj={basics}/>
        <div className="view-name">
          <Summary jsonObj={basics}/>
          <Work jobs={json.work} />
          <Education schools={education} />
          <Skills skills={skills} />
          <References references={references} />
        </div>
    </div>
    <Footer />
  </div>
    );
  }
}

export default App;
