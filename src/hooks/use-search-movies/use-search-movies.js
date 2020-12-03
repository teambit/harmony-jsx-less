import { useState } from 'react';
import { APIconfig } from '../config';

export const useSearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getMovies = async (searchFor) => {
    if (!searchFor) return;
    setIsLoading(true);
    try {
      const endpoint = `${APIconfig.url}?apikey=${APIconfig.key}&s=${searchFor}`;
      const res = await fetch(endpoint);
      const data = await res.json();
      const list = data.Search.map((m) => {
        return {
          title: m.Title,
          year: m.Year,
          imdbID: m.imdbID,
          type: m.Type,
          poster: m.Poster,
        };
      });
      setMovies(list);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  return [getMovies, movies, isLoading, error];
};
