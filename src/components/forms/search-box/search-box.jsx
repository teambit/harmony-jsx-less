import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@netflux-react-babel/base-ui.input';
import { Button } from '@netflux-react-babel/base-ui.button';
import styles from './search-box.module.less';

export const SearchBox = ({ onSubmit, placeHolder }) => {
  const refInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(refInput.current.value);
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <Input
        ref={refInput}
        placeholder={placeHolder}
        className={styles.input}
      />
      <Button type="submit" className={styles.button}>
        Search
      </Button>
    </form>
  );
};

SearchBox.propTypes = {
  /** Submit the research */
  onSubmit: PropTypes.func,
  /** Input place holder */
  placeHolder: PropTypes.string,
};

SearchBox.defaultProps = {
  onSubmit: () => alert('Click on Search!'),
  placeHolder: 'Search...',
};
