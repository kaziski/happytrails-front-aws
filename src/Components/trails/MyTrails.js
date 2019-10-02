import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'

class MyTrails extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ trails: state.trails })

export default connect(mapStateToProps)(MyTrails)
