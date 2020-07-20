import React from 'react';
import { shallow } from 'enzyme';

import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
  it('should render properly', () => {
    const component = shallow(<MovieCard />);

    expect(component).toMatchSnapshot();
  });
});
