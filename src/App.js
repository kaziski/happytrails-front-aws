import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Navbar from './components/users/NavBar'
import { AppLayout } from './ui/Styles'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: palevioletred;
  padding: 0 20px ;
  font-weight: bold;
`

export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  render() {
    return (
      <AppLayout>
        <Title>Happy Trails!</Title>
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
