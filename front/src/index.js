import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';
import App from 'App';
import { ContainerProviders } from './containers';
import API from 'utils/apiGateway';

API.init(`${window.location.protocol}//${window.location.hostname}:7070/api/`);

ReactDOM.render(
	<React.StrictMode>
		<ContainerProviders>
			<App />
		</ContainerProviders>
	</React.StrictMode>,
	document.getElementById('root')
);
