import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyTrailCard from './MyTrailCard'
import { getTrails } from '../../actions/trails'

class MyTrails extends Component {

  componentDidMount() {
    this.props.getTrails()
  }
  render() {
    const { myTrails } = this.props
    console.log("this.props.myTrails in MyTrails", this.props.myTrails);

    const trailList = myTrails.map(trail => {
      console.log("trail in MyTrails", trail);
      return (
        <MyTrailCard
          key={trail.id}
          trail={trail.attributes}
        />
      )
    })
    return (
      <div className="has-text-white" >
        {this.props.myTrails.length === 0 ? <h3>You don't have any trails saved</h3> : ""}
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
