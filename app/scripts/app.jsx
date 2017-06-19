import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Header from './components/header';

OfflinePluginRuntime.install();

render(
  <Header />,
  document.querySelector('.header-container')
);
