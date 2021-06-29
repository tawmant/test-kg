import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import store from './redux';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<Router>
				<App />
			</Router>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
