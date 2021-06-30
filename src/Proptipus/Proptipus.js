import React from "react";
import "./Proptipus.css";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";

// This is the state being imported in for cleanliness
import ProptipusState from "./ProptipusState"

import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";
class Proptipus extends React.Component {
  state = ProptipusState

  increment = () => {
    this.setState({magicNumber: this.state.magicNumber + 1})
  }

  decrement = () => {
    this.setState({magicNumber: this.state.magicNumber -1})
  }

  toggleMovies = () => {
    this.setState({showMovies: !this.state.showMovies})
  }

  toggleGenre = (e) => {
    switch(e.target.value) {
      case 'All':
        this.setState({moviesFilter: e.target.value})
        break;
      case 'Suspense':
        this.setState({moviesFilter: e.target.value})
        break;
      case 'Horror':
        this.setState({moviesFilter: e.target.value})
        break;
      case 'Family':
        this.setState({moviesFilter: e.target.value})
        break;
    }
  }


  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} alt="logo" />
        <img
          className="proptipus-image"
          src={ProptipusBackground}
          alt="background"
        />
        <TentacleOne
          punchline = {this.state.punchline}
         />
        <TentacleTwo
          fishCard = {this.state.favoriteFishGiOhCard}       
         />
        <TentacleThree
         fishGiOhCard = {this.state.hatedFishGiOhCard}
         />
        <TentacleFour
          friendsList = {this.state.friendsList}
         />
        <TentacleFive
          magicNumber = {this.state.magicNumber}
          increment = {this.increment}
          decrement = {this.decrement}
         />
        <TentacleSix
          magicNumber = {this.state.magicNumber}
         />
        <TentacleSeven
          showMovies = {this.state.showMovies}
          moviesFilter = {this.state.moviesFilter}
          toggleMovies = {this.toggleMovies}
          toggleGenre = {this.toggleGenre}
         />
        <TentacleEight
          favoriteMovies = {this.state.favoriteMovies}
          moviesFilter = {this.state.moviesFilter}
          showMovies = {this.state.showMovies}
         />
      </div>
    );
  }
}

export default Proptipus;
