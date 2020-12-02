import React from 'react';
import testRenderer from 'react-test-renderer';
import { BasicInput } from './input.composition';

describe('Input component', () => {
  it('renders correctly', () => {
    testRenderer.create(<BasicInput />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<BasicInput />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
