import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@netflux-react-babel/base-ui.loader';
import { useMovieDetails } from '@netflux-react-babel/movies.hooks.use-movie-details';
import styles from './movie-details.module.less';

export const MovieDetails = ({ imdbID }) => {
  const [getMovie, movie, isLoading, error] = useMovieDetails();

  useEffect(() => {
    getMovie(imdbID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;
  if (error !== '') return <div>{error}</div>;
  const {
    title,
    year,
    type,
    poster,
    rated,
    released,
    runtime,
    genre,
    description,
  } = movie;
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.imageHolder}>
          <img className={styles.image} src={poster} alt={title} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>Year: {year}</div>
        <div className={styles.info}>Type: {type}</div>
        <div className={styles.info}>Rated: {rated}</div>
        <div className={styles.info}>Released: {released}</div>
        <div className={styles.info}>Runtime: {runtime}</div>
        <div className={styles.info}>Genre: {genre}</div>
        <div className={styles.viewDescription}>
          <div className={styles.description}>Description: {description}</div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  /** The movie ID from the API */
  imdbID: PropTypes.string.isRequired,
};
