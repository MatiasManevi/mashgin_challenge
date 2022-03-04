import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import qs from 'qs';

import './Categories.scss';

const Categories = ({ categories }) => {
	const history = useHistory();
	const [selectedCategoryId, setSelectedCategoryId] = useState();
	const search = new URLSearchParams(window.location.search).get('search');

	return (
		<div className="categories">
			{categories.map((category, i) => {
				return (
					<div className={clsx("category__title", { active: selectedCategoryId === category.id })} key={category.id}>
						<a
							onClick={() => {
								setSelectedCategoryId(category.id)
								history.push(`?${qs.stringify({ category_id: category.id, search })}`);
							}}
						>
							{category.name}
						</a>
					</div>
				);
			})}
		</div >
	);
};

export default Categories;
