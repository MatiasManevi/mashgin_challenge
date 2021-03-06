import React from 'react';
import { mount } from 'enzyme';

import Item from '../Item';
import item from './item.fixtures';
import { ContainerProviders } from 'containers';

describe('Item', () => {
	it('should match snapshot', () => {
		const wrapper = mount(<ContainerProviders><Item item={item} /></ContainerProviders>);
		expect(wrapper).toMatchSnapshot();
	});
});
