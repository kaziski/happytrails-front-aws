import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrailCard from './TrailCard'

class IndexTrail extends Component {

  render() {
    const { trails } = this.props.trailobj
    const trailList = trails.map(trail => {
      return (
        <TrailCard
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

const mapStateToProps = state => ({ trails: state.trailsReducer })

export default connect(mapStateToProps)(IndexTrail)