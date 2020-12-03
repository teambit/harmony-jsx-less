import React from 'react';
import { SearchBox } from '@netflux-react-babel/movies.forms.search-box';
import { Loader } from '@netflux-react-babel/base-ui.loader';
import { CardList } from '@netflux-react-babel/movies.card-list';
import { useSearchMovies } from '@netflux-react-babel/movies.hooks.use-search-movies';
import styles from './movies-search.module.less';

export const MoviesSearch = () => {
  const [getMovies, movies, isLoading, error] = useSearchMovies();

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBox onSubmit={(searchValue) => getMovies(searchValue)} />
      </div>
      <div className={styles.results}>
        {isLoading ? <Loader /> : <CardList list={movies} />}
        {error !== '' && <span>{error}</span>}
      </div>
    </div>
  );
};
