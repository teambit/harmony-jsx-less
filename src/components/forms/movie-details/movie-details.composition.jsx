import React from 'react';
import { MovieDetails } from './movie-details';

export const MovieDetailsExample = () => (
  <div
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
    }}
  >
    <MovieDetails imdbID="tt0993846" />
  </div>
);
