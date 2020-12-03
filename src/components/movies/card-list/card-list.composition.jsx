import React from 'react';
import { CardList } from './card-list';

const movies = [
  {
    title: 'The Wolf of Wall Street',
    imdbID: 'tt0993846',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
  },
  {
    title: 'WALL·E',
    imdbID: 'tt0993846',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg',
  },
];

export const MovieCardListExample = () => (
  <div
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CardList list={movies} />
  </div>
);
