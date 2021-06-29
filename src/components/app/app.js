import '../../index';
import React from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../app-header/app-header';
import { MainPage, FormPage, ProvilePage, AddProductPage } from '../pages';
import { Route, Switch } from 'react-router-dom';

import './_app.scss';

function App() {
	const isAuth = useSelector((state) => state.userReducer.isAuth);

	return (
		<div className='App'>
			<div className='container'>
				<AppHeader />
				<Switch>
					<Route exact path='/' component={MainPage} />
					<Route path='/form' component={FormPage} />
					<Route path='/add-product' component={AddProductPage} />
					<Route path='/profile' component={ProvilePage} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
