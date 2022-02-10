import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchButton } from 'components/atoms';
import SearchForm from '../SearchForm';
import * as hooks from '../hooks';

jest.mock('../hooks');

const handleSubmit = jest.fn();
const handleInputChange = jest.fn();
const stateSpy = jest.spyOn(hooks, 'useSearchForm');
const query = 'Laptop';

stateSpy.mockReturnValue({
	handleInputChange,
	handleSubmit,
	query
});

describe('SearchForm', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<SearchForm />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should submit a query', () => {
		const wrapper = mount(<SearchForm />);
		wrapper.find(SearchButton).simulate('click');
		expect(handleSubmit).toHaveBeenCalled();
	});
});
