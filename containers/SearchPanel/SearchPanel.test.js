import React from 'react';
import { shallow } from 'enzyme';

import SearchPanel from './SearchPanel';
import { Logo, SearchControl, SortControl } from '../../components/index';

describe('SearchPanel', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchPanel />);
  });

  it('should render properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain Logo, SearchControl and SortControl components', () => {
    const component = shallow(<SearchPanel />);

    expect(component.find(SearchControl)).toHaveLength(1);
    expect(component.find(SortControl)).toHaveLength(1);
    expect(component.find(Logo)).toHaveLength(1);
  });
});
