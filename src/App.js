import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Navbar from './components/users/NavBar'
import { AppLayout } from '../src/ui/Layout'

// const AppLayout = styled.div`
//   padding: 40px;

// `
export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <AppLayout>

        <Navbar />
      </AppLayout>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App)