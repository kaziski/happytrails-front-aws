import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import GeoForm from '../components/trails/geoForm'
// import Login from '../components/users/Login'
// import Signup from '../components/users/Signup'
import { Button } from "../ui/Styles"

class Home extends Component {

  state = {
    clicked: false
  }

  handleOnClick = (event) => {
    event.preventDefault()
    this.setState({ isClicked: true })
  }

  render() {
    const { currentUser } = this.props

    return (
      <>
        {!currentUser ?
          <span>
            <Button onClick={this.handleOnClick} ><Link to="/signup">Sign Up</Link></Button>
            <Button onClick={this.handleOnClick}><Link to="/login">Log In</Link></Button></span>
          :

          <span><GeoForm />
            <div className="hero-foot has-text-white	">Logged in as {currentUser.username}</div>
          </span>}
      </>
    )
  }
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(Home)