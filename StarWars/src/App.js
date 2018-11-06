import React, { Component } from "react";
import PlanetCard from "./component/PlanetCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      played: false,
      btnTxt: "Play",
      planet: {},
      name: "",
      population: "",
      climate: "",
      terrain: "",
      films: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var request = new XMLHttpRequest();
    var id = Math.floor(Math.random() * 61 + 1);
    var url = "https://swapi.co/api/planets/" + id + "/";
    request.open("GET", url, true);
    request.addEventListener("load", () => {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);
        const { name, population, climate, terrain, films } = response;

        this.setState({
          played: true,
          btnTxt: "Next",
          name,
          population,
          climate,
          terrain,
          films: films.length
        });
      } else {
        console.log("Error in network request: " + request.statusText);
      }
    });
    request.send(null);
    e.preventDefault();
  }

  render() {
    return (
      <div className="dsf">
        <div className="container">
          {this.state.played ? (
            <PlanetCard
              name={this.state.name}
              population={this.state.population}
              climate={this.state.climate}
              terrain={this.state.terrain}
              films={this.state.films}
            />
          ) : (
            <div className="dsf__img" />
          )}
          <button className="dsf__button" onClick={this.handleClick}>
            {this.state.btnTxt}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
