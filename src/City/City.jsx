import React, { Component } from 'react';
import './City.scss';
class City extends Component {
  render(){
    return (
  <div className="row">
    <div className="col s10 offset-s1">
      <div className="spinner center-align">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <img className="single__map" src={this.props.staticMap(this.props.city['coord'].lon, this.props.city['coord'].lat)} alt="Mapa.."/>
          </div>
        </div>
      </div>
      <div id="weather-card" className="card-panel grey-text text-darken-1 hide">
        <div id="location" className="row">
          <div className="col s12 m6">
            <h1>{this.props.city.name}</h1>
          </div>
        </div>
        <div id="weather-current" className="row hide">
          <div className="col m6 s12 temperature-details">
            <span><img id="weather-icon" src={`https://openweathermap.org/img/w/${this.props.city.weather[0].icon}.png`} alt="icon of today's weather" /></span>
            <span id="temperature">{this.props.city['main'].temp}</span>
            <span id="degree-units">&deg;C</span>
          </div>
          <div id="summary" className="col m6 s8 offset-s2">
            <h6>Pressure: {this.props.city['main'].pressure} </h6>
            <h6>Humidity: {this.props.city['main'].humidity}</h6>
            <h6>Wind: {this.props.city['wind'].speed} </h6>
          </div>
        </div>
        <div id="weather-forecast" className="row"></div>
      </div>
    </div>
  </div>
    )
  }
}

export default City;