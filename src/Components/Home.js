import React from 'react'
import { connect } from 'react-redux'
import GeoForm from './trails/GeoForm'

const Home = ({ currentUser }) => {
  return (
    < >
      <div class="title">
        <GeoForm />
      </div>
      <p class="subtitle">Logged in as {currentUser.username}.</p>

      {/* <p className="is-pulled-right">Logged in as {currentUser.username}.</p> */}



    </>
  );
};
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home)

//*I think this is where the search bar should be?
