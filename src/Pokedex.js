import React from "react";
import pokemonData from "./PokeData";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = () => {
  return (
    <div className="Pokedex">
      {pokemonData.map((p) => (
        <Pokecard
          id={p.id}
          pokemonName={p.name}
          pokemonType={p.type}
          pokemonExp={p.base_experience}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
        />
      ))}
    </div>
  );
};

export default Pokedex;