import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '@netflux-react-babel/base-ui.button';
import { MovieDetails } from '@netflux-react-babel/movies.forms.movie-details';
import styles from './card.module.less';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Card = ({ title, imdbID, poster }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={poster} alt={title} />
        <div className={styles.title}>{title}</div>
        <Button className={styles.button} onClick={() => setIsOpen(true)}>
          More Info
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Movie Details"
        style={customStyles}
      >
        <MovieDetails imdbID={imdbID} />
      </Modal>
    </>
  );
};

Card.propTypes = {
  /** Movie title */
  title: PropTypes.string.isRequired,
  /** The movie ID from the API */
  imdbID: PropTypes.string.isRequired,
  /** url movie image */
  poster: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: '',
  imdbID: '',
  poster: '',
};
