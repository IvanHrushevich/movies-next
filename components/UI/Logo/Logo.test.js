import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render properly', () => {
    const component = shallow(<Logo />);

    expect(component).toMatchSnapshot();
  });
});
