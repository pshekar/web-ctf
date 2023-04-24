import React from 'react';
import './App.css';
import {sha256} from 'js-sha256';

// Define the InputForm component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const inputText = this.state.inputText.toLowerCase();
    if (sha256(inputText) === 'e136df5d9840b38f0373028cdc6fd8319d6621d0a519a15b459f01b21ddf1f04') {
      window.location.href = '/starburns';
    } else {
      alert('Incorrect!');
    }
  }

  render() {
    return (
      <div>
        <form class="container" onSubmit={this.handleSubmit}>
          <h1 htmlFor="text-input">Look around...</h1>
          <input class="input" type="text" id="text-input" name="text-input" value={this.state.inputText} onChange={this.handleInputChange} />
          <button class="submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
