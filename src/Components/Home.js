import React from 'react'
import { connect } from 'react-redux'
import GeoForm from '../components/trails/GeoForm'

const Home = ({ currentUser }) => {
  return (
    < >
      <div className="title">
        <GeoForm />
      </div>
      <div className="subtitle has-text-white	">Logged in as {currentUser.username}</div>

    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home)

