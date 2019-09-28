import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndexTrail extends Component {
  // console.log("IndexTrail - this.props", this.props)
  // const { trails } = this.props
  // debugger

  renderTrails = () => {
    console.log("TRAILS", this.props.trailobj.trails)
    if (this.props.trailobj) {
      const trail = this.props.trailobj.trails.map(t => {
        return (
          <div className="box card column is-3">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={t.imgSmallMed ? (t.imgSmallMed) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} alt={t.name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{t.name}</p>
                  <p className="subtitle is-6">{t.difficulty}</p>
                </div>
              </div>

              <div className="content">
                {t.summary}
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">Save</div>
              <div className="card-footer-item">Review</div>
            </footer>
          </div>

        )
      })
      return (
        <div>
          {trail}
        </div>
      )
    }
  }
  render() {
    return (
      < >
        {this.renderTrails()}
      </>
    )
  }
}


const mapStateToProps = state => ({ trails: state.trailsReducer })
// console.log("In IndexTrail - state.trailsReducer.trails")

export default connect(mapStateToProps)(IndexTrail)