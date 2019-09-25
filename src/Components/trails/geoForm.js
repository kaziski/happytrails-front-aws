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
    // process.env.REACT_APP_YELP_API_KEY


    debugger
    const key = "200594950-5f020033b054b3d9e23fb80d0d1d2fd8"
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&key=${key}`)
      .then(response => response.json())
      .then(res => console.log(res))
    //dispatch the res to action to add trails to the store for this session
    //add mapstateprops in this component to make sure i have the state - trails
  }

  geoFunction = () => {
    // const API_KEY = process.env.GEOFORM_API_KEY
    // Geocode.setApiKey(API_KEY)
    Geocode.setApiKey("AIzaSyAiLUUlI0WSPzU7xirrlZbN2LrX3LhNABo")

    //! I thought I figured a way to put the KEY in .env, but 
    //! It has very unreliable behavior
    Geocode.enableDebug()
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(lat, lng)
        // this.updateState([{ name: 'lat', value: lat }, { name: 'lng', value: lng }])
        this.getTrails(lat, lng)
        //* this lat and lng need to be sent to Trail components as props and 
        //*somehow trigger fetch??
      },
      error => {
        console.error(error)
      }
    );
  }

  render() {
    console.log(this.state)
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