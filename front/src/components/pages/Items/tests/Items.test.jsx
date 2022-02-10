import React from 'react';
import { shallow } from 'enzyme';

import Items from '../Items';
import * as hooks from '../hooks';
import items from './items.fixtures';

jest.mock('../hooks');

const stateSpy = jest.spyOn(hooks, 'useItems');

stateSpy.mockReturnValue({
	items
});

describe('Items', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Items />);
		expect(wrapper).toMatchSnapshot();
	});
});
