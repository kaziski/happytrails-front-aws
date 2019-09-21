import React, { Component } from 'react'
import Login from './components/users/Login'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    )
  }
}

export default connect(null, { getCurrentUser })(App)
 // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/trails")
  //     .then(res => res.json())
  //     .then(console.log)
  // }