import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {

  state = {
    input: "",
    name1: "Max"
  }

  lowerNameHandler = (newName) => {
    this.setState({
      name1: newName
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      name1: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <p>Follow the instructions explained in the problem video and try to implement a solution on your own. Compare it with my solution (video + downloadable files) thereafter.</p>
        <p>The instructions are:</p>
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        </ol>

        <UserInput name={this.state.input} changed={this.nameChangedHandler}></UserInput>
        <UserOutput
        name={this.state.name1} 
        click={this.lowerNameHandler.bind(this,'max')}
        changed={this.nameChangedHandler}></UserOutput>
        <UserOutput name="Harry"></UserOutput>
        <UserOutput name="Ron"></UserOutput>
      </div>
    );
  }
}

export default App;
