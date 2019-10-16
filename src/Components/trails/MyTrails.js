import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'

class MyTrails extends Component {

  render() {
    const noSavedTrail = this.props.myTrails.mySavedTrailsArr.length === 0

    if (noSavedTrail) {
      return (
        <div className="has-text-white" >
          <h3>You don't have any trails saved</h3>
        </div >
      )
    }
    const trailList = this.props.myTrails.mySavedTrailsArr.map(trail => {
      return (
        <MyTrailCard
          key={trail.id}
          trail={trail.attributes}
        />
      )
    })
    return (
      < >
        {trailList}
      </>
    )

  }
}
const mapStateToProps = state => ({ myTrails: state.myTrails })

export default connect(mapStateToProps)(MyTrails)
