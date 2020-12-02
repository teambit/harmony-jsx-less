import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../base-ui/input';
import { Button } from '../../base-ui/button';

export const SearchBox = ({ onSubmit }) => {
  const [value, setvalue] = useState('');

  return (
    <form>
      <Input
        placeholder="Search your movies"
        value={value}
        onChange={setvalue}
      />
      <Button onClick={onSubmit}>Search</Button>
    </form>
  );
};

SearchBox.propTypes = {
  // Submit the research
  onSubmit: PropTypes.func,
};

SearchBox.defaultProps = {
  onSubmit: () => alert('Click on Search!'),
};
