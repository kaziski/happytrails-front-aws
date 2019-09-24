import React from 'react'
import { connect } from 'react-redux'
import { H2 } from '../ui/Styles'
import Login from './users/Login'

const Home = ({ currentUser }) => {
  return (
    < >
      this is home
      {currentUser ? <H2><strong>Welcome, {currentUser.username}!</strong></H2> : ""}
      {/* {currentUser ? <Login /> : ""} */}
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
