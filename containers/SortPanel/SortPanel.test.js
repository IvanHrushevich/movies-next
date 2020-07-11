import React from 'react';
import { shallow } from 'enzyme';

import SortPanel from './SortPanel';

describe('SortPanel', () => {
  it('should render properly', () => {
    const component = shallow(<SortPanel />);

    expect(component).toMatchSnapshot();
  });
});
