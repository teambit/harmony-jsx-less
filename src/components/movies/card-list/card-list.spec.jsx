import React from 'react';
import testRenderer from 'react-test-renderer';
import { MovieCardListExample } from './card-list.composition';

describe('Movie card list component', () => {
  it('renders correctly', () => {
    testRenderer.create(<MovieCardListExample />);
  });
});
