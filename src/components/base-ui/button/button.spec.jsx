import React from 'react';
import testRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

describe('Button component', () => {
  it('renders correctly', () => {
    testRenderer.create(<BasicButton />);
  });
  it('snapshot test', () => {
    const component = testRenderer.create(<BasicButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with value', () => {
    const { getByText } = render(<BasicButton />);
    expect(getByText(/Click/)).toBeTruthy();
  });
});
