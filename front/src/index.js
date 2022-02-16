import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import App from 'App';
import { ContainerProviders } from './containers';

ReactDOM.render(
	<React.StrictMode>
		<ContainerProviders>
			<App />
		</ContainerProviders>
	</React.StrictMode>,
	document.getElementById('root')
);
