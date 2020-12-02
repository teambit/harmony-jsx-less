import React from 'react';
import testRenderer from 'react-test-renderer';
import { SearchBoxExample } from './search-box.composition';

describe('Search Box component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SearchBoxExample />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<SearchBoxExample />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
