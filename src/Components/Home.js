import React from 'react'
import { connect } from 'react-redux'
// import GeoForm from './trails/GeoForm'
import TrailsContainer from '../containers/TrailsContainer'

const Home = ({ currentUser }) => {
  return (
    < >
      <div className="title">
        {/* <GeoForm /> */}
        <TrailsContainer />
      </div>
      <div className="subtitle has-text-white	">Logged in as {currentUser.username}</div>

      {/* I want this on the bottom; I may have to make it another component?*/}

    </>
  )
}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home)

