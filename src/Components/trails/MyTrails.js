import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'

class MyTrails extends Component {

  render() {
    const trailList = this.props.myTrails.mySavedTrailsArr.map(trail => {
      return (
        <MyTrailCard
          key={trail.id}
          trail={trail.attributes}
        />
      )
    })
    return (
      <div className="has-text-white" >
        {this.props.myTrails.mySavedTrailsArr.length === 0 ? <h3>You don't have any trails saved</h3> : <h3>Click a name to view more info.</h3>}
        {trailList}
      </div>
    )

  }
}
const mapStateToProps = state => ({ myTrails: state.myTrails })

export default connect(mapStateToProps)(MyTrails)
