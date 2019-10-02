import React from 'react'

const MyTrailCard = ({ trail }) => {
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
            <a className="title is-4" href={trail.url} target="_blank" rel="noopener noreferrer">{trail.name}</a>
          </div>
        </div>

        <div className="content">
          {trail.summary}
        </div>
      </div>
    </div>
  )
}

export default MyTrailCard

// attributes:
// latitude: "37.8966"
// length: 7.1
// longitude: "-122.6359"
// name: "Steep Ravine - Matt Davis Loop"
// url: "https://www.hikingproject.com/trail/7027132/steep-rav