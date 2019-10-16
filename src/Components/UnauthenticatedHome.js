import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import { Button } from "../ui/Styles"

class UnauthenticatedHome extends Component {

  state = {
    clicked: false
  }

  handleOnClick = (event) => {
    event.preventDefault()
    this.setState({ isClicked: true })
  }

  render() {
    return (
      <>
        <Button onClick={this.handleOnClick} ><Link to="/signup">Sign Up</Link></Button>
        <Button onClick={this.handleOnClick}><Link to="/login">Log In</Link></Button>
      </>
    )
  }
}


// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser
//   }
// }


// export default connect(mapStateToProps)(UnauthenticatedHome)
export default UnauthenticatedHome