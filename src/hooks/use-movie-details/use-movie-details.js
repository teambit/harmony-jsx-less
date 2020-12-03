import { useState } from 'react';
import { APIconfig } from '../config';

export const useMovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getMovie = async (imdbID) => {
    if (!imdbID) return;
    setIsLoading(true);
    try {
      const endpoint = `${APIconfig.url}?apikey=${APIconfig.key}&i=${imdbID}`;
      const res = await fetch(endpoint);
      const data = await res.json();
      const details = {
        title: data.Title,
        year: data.Year,
        type: data.Type,
        poster: data.Poster,
        rated: data.Rated,
        released: data.Released,
        runtime: data.Runtime,
        genre: data.Genre,
        description: data.Plot,
      };
      console.log('details', details);
      setMovie(details);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  return [getMovie, movie, isLoading, error];
};
