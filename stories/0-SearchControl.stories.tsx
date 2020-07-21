import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';

import SearchControl from '../components/UI/SearchControl/SearchControl';

export default {
  title: 'SearchControl',
  component: SearchControl,
};

export const basic: FunctionComponent = () => (
  <SearchControl onSearchClick={action('Search string: ')} />
);
