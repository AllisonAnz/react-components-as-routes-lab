import React from 'react';
import { directors } from '../data';

// should render one < h1 /> first, inside of the < div />
// should render 'Directors Page' inside of the < h1 />
// should render a < div /> for each director
//  should render the right content for each director

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors