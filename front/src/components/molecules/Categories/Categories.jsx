import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import './Categories.scss';

const Categories = ({ categories }) => {
	const history = useHistory();
	const [selectedCategoryId, setSelectedCategoryId] = useState();

	return (
		<div className="categories">
			{categories.map((category, i) => {
				return (
					<div className={clsx("category__title", { active: selectedCategoryId === category.id })} key={category.id}>
						<a
							onClick={() => {
								setSelectedCategoryId(category.id)
								history.push(`?category_id=${category.id}`);
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
