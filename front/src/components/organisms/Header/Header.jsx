import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './Header.scss';
import { SearchForm, Categories } from 'components/molecules';

const Header = () => {
	return (
		<header className="shadow">
			<Container>
				<Grid container justify="center">
					<Grid item xs={12} sm={6}>
						<div className="header__content">
							<SearchForm />
						</div>
						<Categories categories={[
							{
								id: 1,
								image_id: "f3fbf57b118fa9",
								name: "Bakery"
							},
							{
								id: 2,
								image_id: "b271afbefdc554",
								name: "Entrees"
							},
							{
								id: 3,
								image_id: "eba73b2361fae3",
								name: "Drinks"
							}
						]} />
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
