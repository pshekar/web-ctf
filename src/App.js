import React from 'react';
import './App.css';

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
    if (inputText === 'starburns') {
      window.location.href = '/starburns';
    } else {
      alert('You entered: ' + this.state.inputText);
    }
  }

  render() {
    return (
      <div>
        <form class="container" onSubmit={this.handleSubmit}>
          <h1 htmlFor="text-input">Inspect Browser...</h1>
          <input class="input" type="text" id="text-input" name="text-input" value={this.state.inputText} onChange={this.handleInputChange} />
          <button class="submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
