import React from 'react';
import testRenderer from 'react-test-renderer';
import {
  SearchBoxExample,
  SearchBoxWithPlaceHolder,
} from './search-box.composition';

describe('Search Box component', () => {
  it('renders correctly', () => {
    testRenderer.create(<SearchBoxExample />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<SearchBoxExample />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with place holder props', () => {
    testRenderer.create(<SearchBoxWithPlaceHolder />);
  });
  it('snapshot test with place holder props', () => {
    const component = testRenderer.create(<SearchBoxWithPlaceHolder />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
