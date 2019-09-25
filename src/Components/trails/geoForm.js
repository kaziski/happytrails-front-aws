import React, { Component } from 'react'
import Geocode from "react-geocode"

class GeoForm extends Component {

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
    // const API_KEY = process.env.GEOFORM_API_KEY

    // Geocode.setApiKey(API_KEY)
    Geocode.setApiKey("AIzaSyCTQE3AwQ3_9EoIwcL6KczFcRBR-dw8RIE")

    //* Make sure to get the API key from my kazumikarbowski account. Happytrails then
    //* figure out a way to hide the key and not publish it on github
    Geocode.enableDebug()
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng)
        //* this lat and lng need to be sent to Trail components as props and 
        //*somehow trigger fetch??
      },
      error => {
        console.error(error)
      }
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>

          <div className="field has-addons">
            <div className="control">
              <input type="text"
                className="input"
                placeholder="Find trails"
                value={this.state.address}
                onChange={event => this.handleOnChange(event)} />
            </div>
            <div className="control">
              <input className="button is-info" type="submit" value="Search" />
            </div>
          </div>
          {/* 

          <input
            type="text"
            value={this.state.address}
            onChange={event => this.handleOnChange(event)} />
          <input type="submit" value="Submit Address" /> */}

        </form>
      </div >
    );
  }
}

export default GeoForm