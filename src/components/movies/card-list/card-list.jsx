import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../card';
import styles from './card-list.module.less';

export const CardList = ({ list }) => {
  return (
    <div className={styles.container}>
      {list &&
        list.map((movie, index) => (
          <Card
            key={index}
            title={movie.title}
            imdbID={movie.imdbID}
            poster={movie.poster}
          />
        ))}
    </div>
  );
};

CardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      /** Movie title */
      title: PropTypes.string,
      /** The movie ID from the API */
      imdbID: PropTypes.string,
      /* Movie image */
      poster: PropTypes.string,
    })
  ),
};
