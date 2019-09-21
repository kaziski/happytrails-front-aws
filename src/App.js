import React, { Component } from 'react'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      this.props.currentUser ? <Logout /> : <Login />
      // <div className="App">
      //   <header className="App-header">
      //     <Login />
      //   </header>
      // </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App)
 // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/trails")
  //     .then(res => res.json())
  //     .then(console.log)
  // }