import React from 'react';
import testRenderer from 'react-test-renderer';
import { BasicLoader } from './loader.composition';

describe('Loader component', () => {
  it('renders correctly', () => {
    testRenderer.create(<BasicLoader />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<BasicLoader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
