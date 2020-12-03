import React from 'react';
import testRenderer from 'react-test-renderer';
import { MovieDetailsExample } from './movie-details.composition';

describe('Movie details screen component', () => {
  it('renders correctly', () => {
    testRenderer.create(<MovieDetailsExample />);
  });
});
