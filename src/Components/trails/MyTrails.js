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
    const trailList = myTrails.map(trail => {
      return (
        <div>
          <ul>
            <li>{trail.attributes.name}</li>
          </ul>
        </div>
      )
    })
    return (
      <div className="has-text-white" >
        {trailList}
      </div>
    )
  }
}
const mapStateToProps = state => ({ myTrails: state.myTrails })

export default connect(mapStateToProps, { getTrails })(MyTrails)
// export default MyTrails
