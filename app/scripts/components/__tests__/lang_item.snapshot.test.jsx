import React from 'react';
import renderer from 'react-test-renderer';

import LangItem from '../lang_item';

it('renders correctly', () => {
  const tree = renderer.create(
    <LangItem code="it" name="Italiano" selected onClick={ () => {} } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
