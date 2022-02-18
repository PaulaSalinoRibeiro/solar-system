import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((ele, index) => (
            <PlanetCard key={ index } planetName={ ele.name } planetImage={ ele.image } />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
