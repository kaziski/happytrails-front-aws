import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndexTrail extends Component {
  // console.log("IndexTrail - this.props", this.props)
  // const { trails } = this.props
  // debugger
  render() {
    console.log(this.props.trailobj)
    const { trails } = this.props.trailobj
    return (
      <div className="has-text-white" >
        <h3>Trails near the address</h3>
        <ul>
          {trails.map(trail => (
            <li>
              {trail.name}
            </li>
          ))}
        </ul>
        <p> Show list of trails</p >
      </div >
    )
  }
}


const mapStateToProps = state => ({ trails: state.trailsReducer })
// console.log("In IndexTrail - state.trailsReducer.trails")

export default connect(mapStateToProps)(IndexTrail)