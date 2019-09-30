import React from 'react'
import { connect } from 'react-redux'
import GeoForm from '../components/trails/GeoForm'
import Login from '../components/users/Login'
import Signup from '../components/users/Signup'

const LoginSignup = () => {
  return (
    <>
      <Login /> or < Signup />
    </>
  )
}


export const Home = ({ currentUser }) => {
  return (
    <div>
      {currentUser ? <GeoForm /> : <LoginSignup />}

    </div >
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home)