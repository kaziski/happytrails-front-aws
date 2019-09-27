import React from 'react'
import { connect } from 'react-redux'

const IndexTrail = () => {
  // console.log("IndexTrail - this.props", this.props)
  // const { trails } = this.props
  // debugger
  return (
    <div className="has-text-white">
      <h3>all the trails</h3>
      {/* <ul>
        {trails.map(trail => (
          <li key={trail}>
            {trail} &nbsp;
          </li>
        ))}
      </ul> */}
      <p>Show list of trails</p>
    </div>
  );
};


const mapStateToProps = state => ({ trails: state.trailsReducer })
// console.log("In IndexTrail - state.trailsReducer.trails")

export default connect(mapStateToProps)(IndexTrail)