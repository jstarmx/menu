import React from 'react';
import renderer from 'react-test-renderer';

import Lang from '../lang';

it('renders correctly', () => {
  const tree = renderer.create(
    <Lang />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
