import React, { Component } from 'react'
import { connect } from 'react-redux'
import GeoForm from './trails/geoForm'
// import NavBar from './components/NavBar'


class Home extends Component {
  render() {
    debugger

    const { currentUser } = this.props
    return (
      <div>
        {/* <NavBar location={this.props.location} /> */}
        <GeoForm />
        {/* <div className="hero-foot has-text-white	">Logged in as {currentUser.username}</div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)