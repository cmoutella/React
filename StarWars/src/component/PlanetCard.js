import React from "react";
import { string, integer } from "prop-types";

const PlanetCard = ({ name, population, climate, terrain, films }) => (
  <div className="card">
    <header className="card__header">
      <h2>{name}</h2>
    </header>
    <div className="card__body">
      <ul className="card__list">
        <li><span>Population:</span> {population}</li>
        <li><span>Climate:</span> {climate}</li>
        <li><span>Terrain:</span> {terrain}</li>
      </ul>
      <p>Featured in {films} films.</p>
    </div>
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
