import React, { Component } from 'react';

import Geocode from "react-geocode";

class App extends Component {


  state = {
    address: ''
  }

  handleOnChange(event) {
    this.setState({
      address: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.geoFunction()

  }


  geoFunction = () => {
    Geocode.setApiKey("AIzaSyDZZLXvVCOMNZvWpXNbTztmGWfOFTWuBt0");
    Geocode.enableDebug();
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>App</p>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input
              type="text"
              value={this.state.address}
              onChange={event => this.handleOnChange(event)} />
            <input type="submit" value="Submit Address" />
          </form>
        </header>
      </div>
    );
  }

}

export default App;
