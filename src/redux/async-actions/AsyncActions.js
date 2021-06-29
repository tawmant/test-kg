import axios from 'axios';
import { loaded, error } from '../redux-components/base';
import { setUser } from '../redux-components/userReducer';

export const fetchCards = () => {
	return (dispatch) => {
		fetch('http://35.198.170.4/api/products/')
			.then((res) => res.json())
			.then((json) => dispatch(loaded(json)))
			.catch((err) => dispatch(error()));
	};
};

export const login = (data) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				`http://35.198.170.4/accounts/login/`,
				{
					...data,
				}
			);
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.token);
		} catch (e) {
			alert(e.response.data.message);
		}
	};
};

export const auth = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(``, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.token);
		} catch (e) {
			alert(e.response.data.message);
			localStorage.removeItem('token');
		}
	};
};
