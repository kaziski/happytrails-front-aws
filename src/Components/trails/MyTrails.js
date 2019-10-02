import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'

class MyTrails extends Component {

  render() {
    const { trails } = this.props.trails
    const trailList = trails.map(trail => {
      return (
        <MyTrailCard
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

const mapStateToProps = state => ({ trails: state.myTrails })

export default connect(mapStateToProps)(MyTrails)
