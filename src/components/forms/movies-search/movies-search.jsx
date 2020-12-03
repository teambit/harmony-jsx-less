import React from 'react';
import { SearchBox } from '../search-box';
import { Loader } from '../../base-ui/loader';
import { CardList } from '../../movies/card-list';
import { useSearchMovies } from '../../../hooks/use-search-movies';
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
