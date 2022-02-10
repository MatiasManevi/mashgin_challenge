import React from 'react';
import { shallow } from 'enzyme';

import Item from '../Item';
import item from './item.fixtures';

describe('Item', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Item item={item} />);
		expect(wrapper).toMatchSnapshot();
	});
});
