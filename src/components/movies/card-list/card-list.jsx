import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@netflux-react-babel/movies.card';
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
  /** Array of movies object */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imdbID: PropTypes.string,
      poster: PropTypes.string,
    })
  ),
};

CardList.defaultProps = {
  list: [],
};
