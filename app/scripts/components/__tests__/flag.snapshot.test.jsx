import React from 'react';
import renderer from 'react-test-renderer';

import Flag from '../flag';

it('renders correctly', () => {
  const tree = renderer.create(
    <Flag code="en" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
