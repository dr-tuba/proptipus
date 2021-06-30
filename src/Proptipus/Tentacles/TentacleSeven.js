import React from "react";

function TentacleSeven(props) {
  const changeMoviesFilter = props.changeMoviesFilter;

  return (
    <div className="tentacle-seven">
      <br />
      <input
        className="show-toggle"
        type="radio"
        value="show" 
        checked={props.showMovies} 
        onClick={props.toggleMovies} /> 
      <span className="show-text">Show</span>
      <br />
      <input 
      className="hide-toggle" 
      type="radio" 
      value="hide" 
      checked={!props.showMovies} 
      onClick={props.toggleMovies} /> 
      <span className="hide-text">Hide</span>
      <br />
      <span className="genre-picker">Genre?</span>
      <select className="genre-selector" onChange={props.toggleGenre}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Suspense">Suspense</option>
        <option value="Family">Family</option>
      </select>
    </div>
  );
}

export default TentacleSeven;
