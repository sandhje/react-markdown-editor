import React, { Component } from "react";
import Editor from "../../editor/container/Editor";
import Preview from "../../preview/container/Preview";
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Editor />
        </div>
        <div>
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
