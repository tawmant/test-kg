import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../redux/async-actions/AsyncActions';
import { useParams } from 'react-router';

import './_form-page.scss';

const FormPage = () => {
	const dispatch = useDispatch();

	const value = useParams();

	const [data, setData] = useState({
		username: '',
		password: '',
	});

	return (
		<div>
			<input
				value={data.username}
				onChange={(e) => setData({ ...data, username: e.target.value })}
				type='text'
				placeholder='username'
			/>
			<input
				value={data.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
				type='password'
				placeholder='password'
			/>
			<button
				onClick={() => {
					dispatch(login(data));
					setData({
						username: '',
						password: '',
					});
				}}>
				create acc
			</button>
		</div>
	);
};

export default FormPage;
