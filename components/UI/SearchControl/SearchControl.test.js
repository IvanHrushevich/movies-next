import React from 'react';
import { shallow } from 'enzyme';

import { SearchControl } from './SearchControl';

describe('SearchControl', () => {
  it('should render properly', () => {
    const component = shallow(<SearchControl />);

    expect(component).toMatchSnapshot();
  });
});
