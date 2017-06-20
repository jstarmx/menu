import React from 'react';
import renderer from 'react-test-renderer';

import FlagSprite from '../flag_sprite';

it('renders correctly', () => {
  const tree = renderer.create(
    <FlagSprite />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
