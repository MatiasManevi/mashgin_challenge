import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Items, Cart, Checkout } from 'components/pages';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Items} />
				<Route path="/cart" exact component={Cart} />
				<Route path="/checkout" exact component={Checkout} />
			</Switch>
		</Router>
	);
}

export default App;
