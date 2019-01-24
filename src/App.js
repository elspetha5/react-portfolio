import React, { Component } from 'react';

// Home/intro page
import Mailbox from "./components/Mailbox";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Envelope from "./components/Envelope";

// Reusable
import Container from "./components/Container";

// Portfolio page
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Other files
import projects from "./projects.json";
import "./app.css";

class App extends Component {
  state = {
    page: "",
    mailbox: "on",
    envelope: "grow",
    hint: "hint",
    page2: "",
    projects
  };

  home = () => {
    this.setState({ page: "" })
  };

  picClick = () => {
    this.setState({
      envelope: "away",
      hint: "noHint"
    })

    setTimeout(() => {
      this.setState({ 
        page: "portfolio",
        page2: "page2in", 
        mailbox: "off",
        envelope: "static",
        hint: "hint",
        sealed: "closed"
      });
    }, 1000 * 2.5);
    
  };

  render() {
    return (
      <div>
        {this.state.page === "portfolio" ? (
          <div id={this.state.page2}>
            <Portfolio>
              <Container>
                <h3 id="check">Check out some of my projects:</h3>
                {this.state.projects.map(project => (
                  <Project
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    pic={process.env.PUBLIC_URL + project.pic}
                    ss={project.ss}
                    rlink={project.rlink}
                    dlink={project.dlink}
                  />
                ))}
                <Info />
              </Container>
            </Portfolio>
            <Contact />
            <Navbar home={this.home} />
            <Footer />
          </div>
        ) : (
            <div>
              <Intro animation={this.state.envelope}>
                <Container>
                  <AboutMe />
                </Container>
                <Envelope 
                picClick={this.picClick}
                hint={this.state.hint}
                />
              </Intro>
              <Mailbox animation={this.state.mailbox}/>
            </div>
          )}
      </div>
    )
  }
}

export default App;
