import React from 'react';
import PropTypes from 'prop-types';
import styles from './loader.module.less';

export const Loader = ({ color, style }) => {
  const circles = [...Array(12)].map((_, index) => {
    return (
      <div key={index}>
        <div
          className={styles['div-after']}
          style={{ background: color }}
        ></div>
      </div>
    );
  });

  return (
    <div className={styles['lds-spinner']} style={{ ...style }}>
      {circles}
    </div>
  );
};

Loader.propTypes = {
  /** hex color */
  color: PropTypes.string,
  /** style object */
  style: PropTypes.object,
};

Loader.defaultProps = {
  color: '#010101',
  style: '',
};
