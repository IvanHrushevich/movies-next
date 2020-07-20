import React from 'react';
import { shallow } from 'enzyme';

import { SortControl } from './SortControl';

describe('SortControl', () => {
  it('should render properly', () => {
    const component = shallow(<SortControl />);

    expect(component).toMatchSnapshot();
  });
});
