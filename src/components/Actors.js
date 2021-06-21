import React from 'react';
import { actors } from '../data';
//Specs:
// Should render on <h1 /> inside of a <div />
// Should render Actors Page inside h1
// Should render a <div /> for each actor 
// Should render the right content for each actor with a class of 'actor'
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;