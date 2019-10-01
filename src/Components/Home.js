import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import GeoForm from '../components/trails/GeoForm'
// import Login from '../components/users/Login'
// import Signup from '../components/users/Signup'
import { Button } from "../ui/Styles"

class Home extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

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
      < >
        {!currentUser ?
          <span>
            <Button onClick={this.handleOnClick} ><Link to="/signup">Sign Up</Link></Button>
            <Button onClick={this.handleOnClick}><Link to="/login">Log In</Link></Button>
          </span> :
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


export default connect(mapStateToProps, { getCurrentUser })(Home)