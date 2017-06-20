import React from 'react';
import { shallow, mount } from 'enzyme';
import closest from 'closest';

import Lang from '../lang';
import LangPopup from '../lang_popup';

jest.mock('closest');

describe('the document click listener', () => {
  it('adds a listener to document click on mount', () => {
    const spy = jest.spyOn(document, 'addEventListener');
    const component = mount(<Lang />);

    expect(spy).toBeCalledWith('click', component.instance().documentClick, false);
  });

  it('removes the listener on unmount', () => {
    const spy = jest.spyOn(document, 'removeEventListener');
    const component = mount(<Lang />);
    component.unmount();

    expect(spy).toBeCalledWith('click', expect.any(Function), false);
  });

  afterEach(() => jest.resetModules());

  describe('when clicking somewhere in the component', () => {
    closest.mockImplementation(() => true);

    const component = mount(<Lang />);
    component.setState({ open: true });
    component.instance().documentClick({ target: null });

    it('does not change the "open" state to false', () =>
      expect(component.state().open).toBe(true)
    );
  });

  describe('when clicking outside of the component', () => {
    closest.mockImplementation(() => false);

    const component = mount(<Lang />);
    component.setState({ open: true });
    component.instance().documentClick({ target: null });

    it('changes the "open" state to false', () =>
      expect(component.state().open).toBe(false)
    );
  });
});

describe('the "open" state', () => {
  describe('on initial load', () => {
    const component = shallow(<Lang />);

    it('does not have an "open" modifier on the ".header__item element', () =>
      expect(component.find('.header__item').props().className.includes('header__item--open'))
        .toBe(false)
    );

    it('does not render a "<LangPopup /> component', () =>
      expect(component.find(LangPopup).length).toBe(0)
    );
  });

  describe('when clicking the toggle button', () => {
    const component = shallow(<Lang />);
    component.find('.header__button').simulate('click');

    it('has an "open" modifier on the ".header__item element', () =>
      expect(component.find('.header__item').props().className.includes('header__item--open'))
        .toBe(true)
    );

    it('renders a "<LangPopup /> component', () =>
      expect(component.find(LangPopup).length).toBe(1)
    );
  });
});

describe('when the "select" handler is called by a child component', () => {
  const component = shallow(<Lang />);
  component.instance().select('fr');

  it('sets the state appropriately', () =>
    expect(component.state()).toEqual({ language: 'fr', open: false })
  );
});

describe('when the "toggle" handler is called by a child component', () => {
  const component = shallow(<Lang />);
  component.setState({ open: true });
  component.instance().toggle();

  it('sets the "open" state appropriately', () =>
    expect(component.state().open).toBe(false)
  );
});
