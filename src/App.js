import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import GetPosts from "./GetPosts";
import "./App.css";
import "./Shane000.jpg";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>The DJ Vibes Random Post Generator</h2>
          </div>
          <div className="App-intro">
            The legendary happy hardcore DJ Vibes has a language all to himself.
            He regularly posts his reminiscing on his Facebook page. This random
            post generator makes more sense.
            <GetPosts />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
