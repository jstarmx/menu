import React from 'react';
import { render } from 'react-dom';
import { install } from 'offline-plugin/runtime';

import Header from '../components/header';

jest.mock('react-dom');
jest.mock('offline-plugin/runtime');

document.body.innerHTML = '<div class="header-container"></div>';

require('../app');

it('calls the offline-plugin install script', () =>
  expect(install).toBeCalled()
);

it('renders the header component', () =>
  expect(render).toBeCalledWith(
    <Header />,
    document.querySelector('.header-container')
  )
);
