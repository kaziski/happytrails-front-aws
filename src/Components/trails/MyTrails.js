import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'
import { getSavedTrails } from '../../actions/trails'

class MyTrails extends Component {

  render() {
    // const { myTrails } = this.props
    // const trailList = myTrails.map(trail => {
    //   console.log("trail.name in MyTraisl", trail.attributes.name);

    //   return (

    //     <MyTrailCard
    //       key={trail.id}
    //       trail={trail.attributes}
    //     />
    //   )
    // })
    // return (
    //   <div className="has-text-white" >
    //     {this.props.myTrails.length === 0 ? <h3>You don't have any trails saved</h3> : <h3>Click a name to view more info.</h3>}
    //     {trailList}
    //     {/* <h3>My Saved Trails</h3>
    //     {trailList} */}
    //   </div>
    // )
    return (
      <p>hi</p>

    )
  }
}
const mapStateToProps = state => ({ myTrails: state.myTrails })

export default connect(mapStateToProps, { getSavedTrails })(MyTrails)
// export default MyTrails
