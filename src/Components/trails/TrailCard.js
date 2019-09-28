import React from 'react'
import { connect } from 'react-redux'

const TrailCard = ({ trail }) => {
  return (
    <div className="tile is-ancestor">
      <div className="card tile is-4 is-vertical is-parent">
        <div className="card-image ">
          <figure className="image">
            <img src={trail.imgMedium} alt={trail.name} />

          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{trail.name}</p>
              <p className="subtitle is-6">{trail.difficulty}</p>
            </div>
          </div>

          <div className="content">
            {trail.summary}
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">Save</div>
          <div className="card-footer-item">Review</div>
        </footer>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ trails: state.trailsReducer })


export default connect(mapStateToProps)(TrailCard)