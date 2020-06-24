import React from 'react';
import './App.css';
import Computer from './Computer';
import FilingCabinet from './FilingCabinet';

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
    fileOpen: [false, false, false, false, false]
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
    if (this.state.fileOpen.includes(true)) {
      drawerOpen = [false, false];
    } else {
      if (drawer === 0) {
        drawerOpen[0] = true;
        drawerOpen[1] = false;
      } else {
        drawerOpen[0] = false;
        drawerOpen[1] = true;
      }
    }


    this.setState({ drawerOpen })
  }
  handleFileClick = (file) => {
    let fileOpen = this.state.fileOpen;
    if (!fileOpen[file]) {
      fileOpen[file] = true;
    }
    let drawerOpen = this.state.drawerOpen;
    if (file === 4) {
      drawerOpen[1] = true;
      drawerOpen[0] = false;
    } else {
      drawerOpen[1] = false;
      drawerOpen[0] = true;
    }
    this.setState({ fileOpen, drawerOpen })

  }
  render() {
    return (
      <div className="App" >
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
      </div>
    );
  }
}

export default App;
