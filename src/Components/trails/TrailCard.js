import React from 'react'
import { connect } from 'react-redux'

const TrailCard = ({ trail }) => {

  return (
    <div className="box card column is-3">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={trail.imgSmallMed ? (trail.imgSmallMed) : ("http://appalachiantrail.org/images/default-source/default-album/trailfocus.jpg?sfvrsn=2")} alt={trail.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            {/* <p className="title is-4">{t.name}</p> */}
            <a className="title is-4" href={trail.url} target="_blank" rel="noopener noreferrer">{trail.name}</a>
          </div>
        </div>

        <div className="content">
          {trail.summary}
        </div>
      </div>
      <footer className="card-footer">
        {/* <input className="button is-primary " type="submit" value="Find me trails!" /> */}
        <a href="/like" className="card-footer-item has-text-black"><i class="fas fa-heart"></i>  Like</a>

        <a href="/comment" className="card-footer-item has-text-black"><i class="fas fa-comments"></i>  Review</a>

      </footer>
    </div>
  )
}
// return (
//   <>
//     {trail}
//   </>
// )


const mapStateToProps = state => ({ trails: state.trailsReducer })

export default connect(mapStateToProps)(TrailCard)