import React from 'react';
import { shallow } from 'enzyme';

import LangItem from '../lang_item';

const onClick = jest.fn();

describe('when the language for the component is not selected', () => {
  const component = shallow(
    <LangItem code="it" name="Italiano" selected={ false } onClick={ onClick } />
  );

  it('does not have an "active" modifier on the ".lang-popup__item" element', () =>
    expect(component.find('.lang-popup__item').props().className.includes('lang-popup__item--active'))
      .toBe(false)
  );
});

describe('when the language for the component is selected', () => {
  const component = shallow(
    <LangItem code="it" name="Italiano" selected onClick={ onClick } />
  );

  it('does not have an "active" modifier on the ".lang-popup__item" element', () =>
    expect(component.find('.lang-popup__item').props().className.includes('lang-popup__item--active'))
      .toBe(true)
  );
});

describe('when clicking ".lang-popup__button"', () => {
  const component = shallow(
    <LangItem code="it" name="Italiano" selected onClick={ onClick } />
  );
  component.find('.lang-popup__button').simulate('click');

  it('calls the "onClick" prop with its code', () =>
    expect(onClick).toBeCalledWith('it')
  );
});
