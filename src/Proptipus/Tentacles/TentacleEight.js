import React from "react";

function TentacleEight(props) {
  const horrorMovies = props.favoriteMovies.filter(movie => movie.genre === 'Horror')
  let renderHorrorMovies = horrorMovies.map(movie => {
    return (
      <span className="movie-card">
        <span className="movie-title">{movie.title}</span>
        <br />
        <span className="movie-review">{movie.review}</span>
        <br />
      </span>
    )}
  )

  const suspenseMovies = props.favoriteMovies.filter(movie => movie.genre === 'Suspense')
  let renderSuspenseMovies = suspenseMovies.map(movie => {
    return (
      <span className="movie-card">
        <span className="movie-title">{movie.title}</span>
        <br />
        <span className="movie-review">{movie.review}</span>
        <br />
      </span>
    )}
  )

  const familyMovies = props.favoriteMovies.filter(movie => movie.genre === 'Family')
  let renderFamilyMovies = familyMovies.map(movie => {
    return (
      <span className="movie-card">
        <span className="movie-title">{movie.title}</span>
        <br />
        <span className="movie-review">{movie.review}</span>
        <br />
      </span>
    )}
  )

  const allMovies = props.favoriteMovies
  let renderAllMovies = allMovies.map(movie => {
    return (
      <span className="movie-card">
        <span className="movie-title">{movie.title}</span>
        <br />
        <span className="movie-review">{movie.review}</span>
        <br />
      </span>
    )}
  )

  const noMovies = []
  let renderNoMovies = noMovies.map(movie => {
    return (
      <span className="movie-card">
        <span className="movie-title">{movie.title}</span>
        <br />
        <span className="movie-review">{movie.review}</span>
        <br />
      </span>
    )}
  )
  
 
  if (props.moviesFilter === 'All' && props.showMovies === true) {
  return (
    <div className="tentacle-eight">
      {renderAllMovies}
    </div>
  )
  } else if (props.moviesFilter === 'Horror' && props.showMovies === true) {
  return (
    <div className="tentacle-eight">
      {renderHorrorMovies}
    </div>
  )
  } else if (props.moviesFilter === 'Suspense' && props.showMovies === true) {
    return (
      <div className="tentacle-eight">
        {renderSuspenseMovies}
      </div>
    )
  } else if (props.moviesFilter === 'Family' && props.showMovies === true) {
    return (
      <div className="tentacle-eight">
        {renderFamilyMovies}
      </div>
    )
  } else if (props.moviesFilter === 'All' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {renderNoMovies}
      </div>
    )
  } else if (props.moviesFilter === 'Horror' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {renderFamilyMovies}
        {renderSuspenseMovies}
      </div>
    )
  } else if (props.moviesFilter === 'Suspense' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {renderHorrorMovies}
        {renderFamilyMovies}
      </div>
    )
  } else if (props.moviesFilter === 'Family' && props.showMovies === false) {
    return (
      <div className="tentacle-eight">
        {renderHorrorMovies}
        {renderSuspenseMovies}
      </div>
    )
  }
}

export default TentacleEight;
