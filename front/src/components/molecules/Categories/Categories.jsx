import React from 'react';
import { useHistory } from 'react-router-dom';

import './Categories.scss';

const Categories = ({ categories }) => {
	const history = useHistory();

	return (
		<div className="categories">
			{categories.map((category, i) => {
				return (
					<div className="category__title" key={category.id}>
						<a
							onClick={() => {
								history.push(`?category=${category.id}`);
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
