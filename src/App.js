import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import './App.css';
import Computer from './Computer';
import FilingCabinet from './FilingCabinet';
import Project from './Project';
import { ticTacToe, classicCarParts, beerBuddy, spg } from "./lib/projectData";
import Resume from './Resume';

const technologies = [
  "JavaScript",
  "React",
  "Node",
  "Express",
  "HTML",
  "CSS",
  "Swift (IOS)",
  "Ruby",
  "Sinatra"
]
let interval;
let screenTextIndex = 0;
class App extends React.Component {
  state = {
    screenText: "JavaScript",
    drawerOpen: [false, false],
    fileOpen: [
      { name: "tic tac toe", open: false, link: "/tic-tac-toe", img: "/tic-tac-toe-afl.jpg" },
      { name: "classic car parts", open: false, link: "/classic-car-parts", img: "/classic-car-parts.jpg" },
      { name: "beer buddy", open: false, link: "/beer-buddy", img: "/beer-buddy.jpg" },
      { name: "stradbroke printing group", open: false, link: "/spg", img: "/spg.jpg" },
      { name: "peter hristakos", open: false, link: "/resume", img: "/Hristakos-resume.png" }
    ]
  }


  startScreenTextChange = () => {
    interval = setInterval(() => {
      if (screenTextIndex < technologies.length - 1) {
        screenTextIndex += 1;
      } else {
        screenTextIndex = 0;
      }
      this.setState({ screenText: technologies[screenTextIndex] })
    }, 3000);
    console.log(interval)
  };
  componentDidMount = () => {
    this.startScreenTextChange();
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
  render() {
    return (
      <div className="App" >
        <Switch>
          <Route path="/tic-tac-toe">
            <Project
              name={ticTacToe.name}
              img={ticTacToe.image}
              description={ticTacToe.description}
              link={ticTacToe.link}
            />
          </Route>
          <Route path="/classic-car-parts">
            <Project
              name={classicCarParts.name}
              img={classicCarParts.image}
              description={classicCarParts.description}
              link={classicCarParts.link}
            />

          </Route>
          <Route path="/beer-buddy">
            <Project
              name={beerBuddy.name}
              img={beerBuddy.image}
              description={beerBuddy.description}
              link={beerBuddy.link}
            />
          </Route>
          <Route path="/spg">
            <Project
              name={spg.name}
              img={spg.image}
              description={spg.description}
              link={spg.link}
            />

          </Route>
          <Route path="/resume">
            <Resume />

          </Route>

          <Route path="/">
            <div className="room-wrapper" >
              <Computer
                screenText={this.state.screenText}
              />
              <FilingCabinet
                drawerOpen={this.state.drawerOpen}
                onDrawerClick={this.setDrawOpen}
                onFileClick={this.handleFileClick}
                fileOpen={this.state.fileOpen}
              />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
