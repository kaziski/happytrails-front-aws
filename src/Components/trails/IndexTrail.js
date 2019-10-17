import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrailCards from './TrailCards'

class IndexTrail extends Component {

  render() {
    const { trails } = this.props.trailobj
    const trailList = trails.map(trail => {
      return (
        <TrailCards
          key={trail.id}
          trail={trail}
        />
      )
    })
    return (
      <div className="has-text-white" >
        {trailList}
      </div>
    )
  }
}

const mapStateToProps = state => ({ trails: state.trails })
//trails is the name of the reducer. The name used here is 
//defined in App

export default connect(mapStateToProps)(IndexTrail)