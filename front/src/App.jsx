import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Items } from 'components/pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Items} />
			</Switch>
		</Router>
	);
}

export default App;
