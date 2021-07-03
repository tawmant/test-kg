import { combineReducers, configureStore } from '@reduxjs/toolkit';

import mainReducer from './redux-components/main-reducer';
import userReducer from './redux-components/user-reducer';
import productItemReducer from './redux-components/product-item-reducer';
import addProductReducer from './redux-components/add-product-reducer';

const rootReducer = combineReducers({
	mainReducer,
	userReducer,
	addProductReducer,
	productItemReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
