import React from 'react';
import pokemonData from './PokeData';
import Pokedex from './Pokedex';
import './App.css';

export default () => (
  <div className='App-container'>
    <h2>Pokedex</h2>
    <Pokedex pokemon={pokemonData} />
  </div>
);