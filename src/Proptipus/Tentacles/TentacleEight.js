import React from "react";

function TentacleEight(props) {
  const horrorMovies = props.favoriteMovies.filter(movie => movie.genre === 'Horror')
  const suspenseMovies = props.favoriteMovies.filter(movie => movie.genre === 'Suspense')
  const familyMovies = props.favoriteMovies.filter(movie => movie.genre === 'Family')
  const allMovies = props.favoriteMovies
  const noMovies = []

  function mapMovies(genre){
    return genre.map(movie => {
      return (
      <span className="movie-card">
        <span className="movie-title">{movie.title}</span>
        <br />
        <span className="movie-review">{movie.review}</span>
        <br />
      </span>
      )
    })
  }

  if (props.moviesFilter === 'All' && props.showMovies === true) {
  return (
    <div className="tentacle-eight">
      {mapMovies(allMovies)}
    </div>
  )
  } else if (props.moviesFilter === 'Horror' && props.showMovies === true) {
  return (
    <div className="tentacle-eight">
      {mapMovies(horrorMovies)}
    </div>
  )
  } else if (props.moviesFilter === 'Suspense' && props.showMovies === true) {
    return (
      <div className="tentacle-eight">
        {mapMovies(suspenseMovies)}
      </div>
    )
  } else if (props.moviesFilter === 'Family' && props.showMovies === true) {
    return (
      <div className="tentacle-eight">
        {mapMovies(familyMovies)}
      </div>
    )
  } else if (props.moviesFilter === 'All' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {mapMovies(noMovies)}
      </div>
    )
  } else if (props.moviesFilter === 'Horror' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
       {mapMovies(familyMovies)}
       {mapMovies(suspenseMovies)}
      </div>
    )
  } else if (props.moviesFilter === 'Suspense' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {mapMovies(horrorMovies)}
        {mapMovies(familyMovies)}
      </div>
    )
  } else if (props.moviesFilter === 'Family' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {mapMovies(horrorMovies)}
        {mapMovies(suspenseMovies)}
      </div>
    )
  }
}

export default TentacleEight;
