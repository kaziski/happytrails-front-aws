import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'
import { getTrails } from '../../actions/trails'

class MyTrails extends Component {

  //I don't think I need this...
  // componentDidMount() {
  //   this.props.getTrails()
  // }
  render() {
    const { myTrails } = this.props
    const trailList = myTrails.map(trail => {
      return (
        <MyTrailCard
          key={trail.id}
          trail={trail.attributes}
        />
      )
    })
    return (
      <div className="has-text-white" >
        {this.props.myTrails.length === 0 ? <h3>You don't have any trails saved</h3> : <h3>Click a name to view more info.</h3>}
        {trailList}
        {/* <h3>My Saved Trails</h3>
        {trailList} */}
      </div>
    )
  }
}
const mapStateToProps = state => ({ myTrails: state.myTrails })

export default connect(mapStateToProps, { getTrails })(MyTrails)
// export default MyTrails
