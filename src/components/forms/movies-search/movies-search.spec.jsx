import React from 'react';
import testRenderer from 'react-test-renderer';
import { MoviesSearchExample } from './movies-search.composition';

describe('Movies search screen component', () => {
  it('renders correctly', () => {
    testRenderer.create(<MoviesSearchExample />);
  });
});
