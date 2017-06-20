import React from 'react';
import renderer from 'react-test-renderer';

import LangPopup from '../lang_popup';
import languages from '../../languages';

it('renders correctly', () => {
  const tree = renderer.create(
    <LangPopup
      close={ () => {} }
      languages={ languages }
      onClick={ () => {} }
      selected="de"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
