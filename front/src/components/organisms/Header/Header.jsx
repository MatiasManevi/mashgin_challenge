import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './Header.scss';
import { SearchForm } from 'components/molecules';

const Header = () => {
	return (
		<div className="header">
			<Container>
				<Grid container justify="center">
					<Grid item xs={6}>
						<div className="header__content">
							<SearchForm />
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Header;
