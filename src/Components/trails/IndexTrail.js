import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrailCard from './TrailCard'

class IndexTrail extends Component {
  // console.log("IndexTrail - this.props", this.props)
  // const { trails } = this.props
  // debugger
  render() {
    console.log(this.props.trailobj)
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
      <ul>
        {trailList}
      </ul>
    )
  }
}


const mapStateToProps = state => ({ trails: state.trailsReducer })
// console.log("In IndexTrail - state.trailsReducer.trails")

export default connect(mapStateToProps)(IndexTrail)