import React, { Component } from 'react'
import Geocode from "react-geocode"

class GeoForm extends Component {

  state = {
    address: '',
    lat: null,
    lng: null
  }

  // updateState = (arr) => {
  //   arr.forEach(hash => {
  //     const { name, value } = hash
  //     this.setState({
  //       [name]: value
  //     })
  //   })
  // }

  handleOnChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.geoFunction()
  }

  getTrails = (lat, lng) => {
    const key = "200594950-5f020033b054b3d9e23fb80d0d1d2fd8"
    console.log(key)
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&key=${key}`)
      .then(response => console.log(response.json()))
      .then(res => console.log(res))
    //dispatch the res to action to add trails to the store for this session
    //add mapstateprops in this component to make sure i have the state - trails
  }

  geoFunction = () => {
    Geocode.setApiKey(process.env.REACT_APP_GEOFORM_API_KEY)
    Geocode.enableDebug()
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng)
        this.getTrails(lat, lng)
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
            <div className="control is-expanded">
              <input type="text"
                className="input"
                placeholder="Type an address to find trails"
                value={this.state.address}
                onChange={event => this.handleOnChange(event)} />
            </div>
            <div className="control">
              <input className="button is-primary " type="submit" value="Find me trails!" />
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