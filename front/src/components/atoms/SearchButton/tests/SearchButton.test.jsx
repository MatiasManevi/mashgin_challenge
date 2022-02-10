import React from 'react';
import { shallow } from 'enzyme';

import SearchButton from '../SearchButton';

describe('SearchButton', () => {
	const clickHandler = jest.fn();

	it('should match snapshot', () => {
		const wrapper = shallow(<SearchButton clickHandler={clickHandler} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should call clickHandler when clicking', () => {
		const wrapper = shallow(<SearchButton clickHandler={clickHandler} />);
		wrapper.simulate('click');
		expect(clickHandler).toHaveBeenCalledTimes(1);
	});
});
