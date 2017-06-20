import React from 'react';
import { shallow } from 'enzyme';

import LangItem from '../lang_item';
import LangPopup from '../lang_popup';

const close = jest.fn();
const languages = {
  popular: [
    {
      name: 'English',
      code: 'en',
      id: 0,
    },
    {
      name: 'Deutsch',
      code: 'de',
      id: 1,
    },
  ],
  all: [
    {
      name: 'Dansk',
      code: 'dk',
      id: 2,
    },
    {
      name: 'Magyar',
      code: 'hu',
      id: 3,
    },
  ],
};

const component = shallow(
  <LangPopup
    close={ close }
    languages={ languages }
    onClick={ () => {} }
    selected="de"
  />
);

describe('when clicking the close button', () => {
  component.find('.lang-popup__close').simulate('click');

  it('calls the "close" prop', () =>
    expect(close).toBeCalled()
  );
});

describe('rendering the LangItem components', () => {
  it('renders "popular" and "all" items', () =>
    expect(component.find(LangItem).length).toBe(4)
  );

  it('renders an unselected item', () =>
    expect(component.find(LangItem).first().props()).toEqual({
      code: 'en',
      name: 'English',
      selected: false,
      onClick: expect.any(Function),
    })
  );

  it('renders a selected item', () =>
    expect(component.find(LangItem).at(1).props()).toEqual({
      code: 'de',
      name: 'Deutsch',
      selected: true,
      onClick: expect.any(Function),
    })
  );
});
