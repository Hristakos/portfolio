import React from 'react';
import {
  Switch,
  Route,
  Router,
  Redirect
} from 'react-router-dom'
import './App.css';
import Computer from './Computer';
import FilingCabinet from './FilingCabinet';
import Project from './Project';
import { ticTacToe, classicCarParts, beerBuddy, spg } from "./lib/projectData";
import Resume from './Resume';
import Whiteboard from './Whiteboard';
import Window from './Window';
import Desk from './Desk';
import Calendar from './Calendar';
import CoffeeCup from './CoffeeCup';

const technologies = [
  { name: "JavaScript", img: "/logo-javascript.png" },
  { name: "React", img: "/react-logo.png" },
  { name: "Node", img: "/node-logo.png" },
  { name: "Express", img: "/express-logo.png" },
  { name: "HTML", img: "/html-logo.png" },
  { name: "CSS", img: "/css-logo.png" },
  { name: "Swift (IOS)", img: "/swift-logo.png" },
  { name: "Ruby", img: "/ruby-logo.png" },
  { name: "Sinatra", img: "/sinatra-logo.jpeg" }
]
const calendarData = [
  { image: "/GA-logo.png", year: "Mar - Jun 2020", description: "Software Engineering Immersive Graduate" },
  { image: "/ontime-logo.jpeg", year: "2015 - 2020", description: "Delivery Driver" },
  { image: "/Capital-logo.jpeg", year: "2013 - 2015", description: "Delivery Driver" }
]
let interval;
let technologyIndex = 0;
let clockInterval = 0;
class App extends React.Component {
  state = {
    technology: technologies[0],
    drawerOpen: [false, false],
    fileOpen: [
      { name: "tic tac toe", open: false, link: "/tic-tac-toe", img: "/tic-tac-toe-afl.jpg" },
      { name: "classic car parts", open: false, link: "/classic-car-parts", img: "/classic-car-parts.jpg" },
      { name: "beer buddy", open: false, link: "/beer-buddy", img: "/beer-buddy.jpg" },
      { name: "stradbroke printing group", open: false, link: "/spg", img: "/spg.jpg" },
      { name: "peter hristakos", open: false, link: "/resume", img: "/Hristakos-resume.png" },
    ],
    whiteboardDisplay: false,
    windowOpen: false,
    bootsClicked: false,
    date: new Date(),
    calendarPage: 0,
    splash: true

  }

  startTimer = () => {
    clockInterval = setInterval(() => this.setState({ date: new Date() }), 1000)
  }
  startTechnologyChange = () => {
    interval = setInterval(() => {
      if (technologyIndex < technologies.length - 1) {
        technologyIndex += 1;
      } else {
        technologyIndex = 0;
      }
      this.setState({ technology: technologies[technologyIndex] })
    }, 5000);
    console.log(interval)
  };
  componentDidMount = () => {
    this.startTechnologyChange();
    this.startTimer();
  }

  setDrawOpen = (drawer) => {
    let drawerOpen = this.state.drawerOpen;
    // if (this.state.fileOpen.includes(true)) {
    //   drawerOpen = [false, false];
    // } else {
    if (drawer === 0) {
      if (drawerOpen[0]) {
        drawerOpen[0] = false;
        drawerOpen[1] = false;
      } else {
        drawerOpen[0] = true;
        drawerOpen[1] = false;
      }
    } else if (drawer === 1) {
      if (drawerOpen[1]) {
        drawerOpen[0] = false;
        drawerOpen[1] = false;
      } else {
        drawerOpen[0] = false;
        drawerOpen[1] = true;
      }
    }
    let fileOpen = this.state.fileOpen;
    if (drawerOpen[0]) {
      fileOpen.forEach(file => {
        if (file.name !== "peter hristakos") {
          file.open = true;
        }
      })
    } else {
      fileOpen.forEach(file => {
        if (file.name !== "peter hristakos") {
          file.open = false;
        }
      })
    }

    if (drawerOpen[1]) {
      fileOpen.forEach(file => {
        if (file.name === "peter hristakos") {
          file.open = true;
        }
      })
    } else {
      fileOpen.forEach(file => {
        if (file.name === "peter hristakos") {
          file.open = false
        }
      })

    }

    this.setState({ drawerOpen, fileOpen })
  }
  handleFileClick = (file) => {
    let fileOpen = this.state.fileOpen;
    // if (!fileOpen[file]) {
    //   fileOpen[file] = true;
    // }
    let drawerOpen = this.state.drawerOpen;
    if (file === 4) {
      drawerOpen[1] = true;
      drawerOpen[0] = false;
    } else if (file !== 4) {
      drawerOpen[1] = false;
      drawerOpen[0] = true;
    }
    this.setState({ fileOpen, drawerOpen })
    console.log("file = " + file)

  }

  setWindowOpen = () => {
    console.log("window open");
    this.setState({ windowOpen: !this.state.windowOpen })
  }

  bootsClicked = () => {
    this.setState({ bootsClicked: !this.state.bootsClicked })
  }

  turnCalendarPage = () => {
    this.setState({ calendarPage: this.state.calendarPage === 2 ? 0 : this.state.calendarPage += 1 })
  }
  setSplash = () => {
    this.setState({ splash: !this.state.splash })
  }

  setWhiteboardDisplay = () => {
    this.setState({ whiteboardDisplay: true })
  }

  render() {
    const date = new Date()
    return (
      <div className="App" >

        <Switch>
          <Route path="/tic-tac-toe">
            <Project
              data={ticTacToe}
            />
          </Route>
          <Route path="/classic-car-parts">
            <Project
              data={classicCarParts}
            />

          </Route>
          <Route path="/beer-buddy">
            <Project
              data={beerBuddy}
            />
          </Route>
          <Route path="/spg">
            <Project
              data={spg}
            />

          </Route>
          <Route path="/resume">
            <Resume />

          </Route>

          <Route path="/home">

            <div className="room-wrapper" >
              <div className="backwall">
                <FilingCabinet
                  drawerOpen={this.state.drawerOpen}
                  onDrawerClick={this.setDrawOpen}
                  onFileClick={this.handleFileClick}
                  fileOpen={this.state.fileOpen}
                />
                <Whiteboard
                  handleClick={this.setWhiteboardDisplay}
                  display={this.state.whiteboardDisplay} />
                <Calendar
                  data={calendarData}
                  handlePageClick={this.turnCalendarPage}
                  currentPage={this.state.calendarPage} />

                <div className="window-boots">
                  <Window
                    handleWindowClick={this.setWindowOpen}
                    windowOpen={this.state.windowOpen} />
                  <div >
                    <img className={this.state.bootsClicked ? "slide-left" : ""}
                      onClick={this.bootsClicked} src="/boots.jpeg" />
                    <p style={{ display: this.state.bootsClicked ? "block" : "none" }}>Maribyrnong Park Football Club 1990 - 2005</p>

                  </div>
                </div>



              </div>

              <div className="frontwall">
                <Computer
                  technology={this.state.technology}
                />

                <Desk date={this.state.date} />
              </div>
            </div>
          </Route>
          <Route path="/">
            {this.state.splash ?

              <div className="room-wrapper" >
                <div className="splash"
                  onClick={this.setSplash}>Welcome to my office. Feel free to click around.</div>
                <div className="backwall">
                  <FilingCabinet
                    drawerOpen={this.state.drawerOpen}
                    onDrawerClick={this.setDrawOpen}
                    onFileClick={this.handleFileClick}
                    fileOpen={this.state.fileOpen}
                  />
                  <Whiteboard />
                  <Calendar
                    data={calendarData}
                    handlePageClick={this.turnCalendarPage}
                    currentPage={this.state.calendarPage} />

                  <div className="window-boots">
                    <Window
                      handleWindowClick={this.setWindowOpen}
                      windowOpen={this.state.windowOpen} />
                    <div>
                      <img onClick={this.bootsClicked} src="/boots.jpeg"></img>
                      <div style={{ display: this.state.bootsClicked ? "block" : "none" }}>Played for Maribyrnong Park Football Club 1990-2005</div>
                    </div>
                  </div>



                </div>

                <div className="frontwall">
                  <Computer
                    technology={this.state.technology}
                  />

                  <Desk date={this.state.date} />
                </div>
              </div>
              : <Redirect to="/home" />}
          </Route>


        </Switch >
      </div >
    );
  }
}

export default App;
