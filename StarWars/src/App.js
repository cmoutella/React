import React, { Component } from 'react'
import PlanetCard from './component/PlanetCard'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      played: false,
      btnTxt: 'Play',
      planet: {},
      planet_name: '',
      population: '',
      climate: '',
      terrain: '',
      films: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.randomInt = this.randomInt.bind(this)
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  handleClick(e){
    var request = new XMLHttpRequest();
    const url = 'https://swapi.co/api/planets/'
    request.open('GET', url, true);
    request.addEventListener('load', function() {
      if (request.status >= 200 && request.status < 400){
        var response = JSON.parse(request.responseText)
        console.log(response)
      } else {
        console.log('Error in network request: ' + request.statusText)
      }
    })
    request.send(null)
    e.preventDefault()
    this.setState({
      played: true,
      btnTxt: 'Next',
      planet_name: '',
      population: '',
      climate: '',
      terrain: '',
      films: ''
    })
  }

  render() {
    return (
      <div className="dsf">
        <div className="container">
          {this.state.played ? 
            (<PlanetCard 
              planet_name={this.state.planet_name}
              population={this.state.population}
              climate={this.state.climate}
              terrain={this.state.terrain}
              films={this.state.films}></PlanetCard>)
            :
            (<div className="dsf__img"></div>)
          }
          <button className="dsf__button" onClick={this.handleClick}>{this.state.btnTxt}</button>
        </div>
      </div>
    );
  }
} 

export default App