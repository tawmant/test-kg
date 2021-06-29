import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reducer from './redux-components/base';
import userReducer from './redux-components/userReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	reducer,
	userReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
