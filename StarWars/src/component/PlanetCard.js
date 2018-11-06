import React from "react";
import { string, integer } from "prop-types";

const PlanetCard = ({ name, population, climate, terrain, films }) => (
  <div className="card">
    <header className="card__header">
      <h2>{name}</h2>
    </header>
    <ul className="card__list">
      <li>Population: {population}</li>
      <li>Climate: {climate}</li>
      <li>Terrain: {terrain}</li>
    </ul>
    <p>Featured in {films} films.</p>
  </div>
);

PlanetCard.protoTypes = {
  name: string.isRequired,
  population: string.isRequired,
  climate: string.isRequired,
  terrain: string.isRequired,
  films: integer
};
export default PlanetCard;
