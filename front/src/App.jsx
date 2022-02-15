import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Items, Cart } from 'components/pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Items} />
				<Route path="/cart" exact component={Cart} />
			</Switch>
		</Router>
	);
}

export default App;
