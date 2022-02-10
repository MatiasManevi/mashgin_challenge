import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './Content.scss';

const Content = ({ children }) => {
	return (
		<div className="content">
			<Container>
				<Grid container>
					<Grid item xs={12}>
						{children}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Content;
