import React, { Component } from 'react';
import Login from './components/users/Login'
class App extends Component {
  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/trails")
  //     .then(res => res.json())
  //     .then(console.log)
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>App</p>
          <Login />
        </header>
      </div>
    )
  }
}

export default App
