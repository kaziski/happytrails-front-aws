import React from 'react'
import { connect } from 'react-redux'

const TrailCard = ({ trail }) => {
  return (
    <div class="card ">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={trail.imgMedium} alt={trail.name} />

        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          {/* <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div> */}
          <div class="media-content">
            <p class="title is-4">{trail.name}</p>
            <p class="subtitle is-6">{trail.difficulty}</p>
          </div>
        </div>

        <div class="content">
          {trail.summary}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ trails: state.trailsReducer })


export default connect(mapStateToProps)(TrailCard)