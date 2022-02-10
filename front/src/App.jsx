import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Header } from 'components/organisms';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<h1>App</h1>
			</Switch>
		</Router>
	);
}

export default App;
