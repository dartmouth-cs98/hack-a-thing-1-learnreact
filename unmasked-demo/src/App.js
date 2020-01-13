import React, {Component} from "react";
import './App.css';
import Main from './Components/Main/Main.js';
import Navbar from "./Components/Navbar/Navbar.js";

class App extends Component{
  render(){
    return <div>
      <Navbar></Navbar>
      <Main></Main>
    </div>;
  }
};

export default App;
