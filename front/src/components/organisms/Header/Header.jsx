import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './Header.scss';
import { useCategories } from './hooks';
import { SearchForm, Categories } from 'components/molecules';

const Header = () => {
	const { categories } = useCategories();

	return (
		<header className="shadow">
			<Container>
				<Grid container justify="center">
					<Grid item xs={12} sm={6}>
						<div className="header__content">
							<SearchForm />
						</div>
						<Categories categories={categories} />
					</Grid>
				</Grid>
			</Container>
			<div className="header__cart">
				<a href="/cart">
					<img src="images/cart.png" alt="go to cart section" />
				</a>
			</div>
		</header>
	);
};

export default Header;
