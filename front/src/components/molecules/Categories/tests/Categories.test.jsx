import React from 'react';
import { shallow } from 'enzyme';

import Categories from '../Categories';
import categories from './categories.fixtures';

describe('Categories', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Categories categories={categories} />);
		expect(wrapper).toMatchSnapshot();
	});
});
