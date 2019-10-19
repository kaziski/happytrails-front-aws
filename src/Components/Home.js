import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Title } from '../ui/Styles'
import { Button } from '../ui/Styles'

class Home extends Component {

  render() {
    const { currentUser } = this.props
    return (
      <>
        {!currentUser ?
          <span>
            <div className="navbar-brand">
              <Title className="title"><Link to="/"><span className="fas fa-hiking"></span></Link>  Happy Trails</Title>
            </div>
            <Button><Link to="/signup">Sign Up</Link></Button>
            <Button><Link to="/login">Log In</Link></Button></span>
          :

          <span>
            {/* <GeoForm /> */}
            {/* <div className="hero-foot has-text-white	">Logged in as {currentUser.username}</div> */}
          </span>
        }
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)