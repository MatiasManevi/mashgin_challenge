import React from 'react';
import { shallow } from 'enzyme';

import Content from '../Content';

describe('Content', () => {
	it('should match snapshot', () => {
		const children = 'Some text';
		const wrapper = shallow(<Content>{children}</Content>);
		expect(wrapper).toMatchSnapshot();
	});
});
