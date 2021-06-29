import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../redux/async-actions/AsyncActions';
import { requested } from '../../redux/redux-components/base';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import CardItem from '../card-item/card-item';

import './_cards.scss';

const Cards = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.reducer);

	useEffect(() => {
		dispatch(requested());
		dispatch(fetchCards());
	}, []);

	if (state.loading) {
		return <Spinner />;
	}

	if (state.error) {
		return <Error />;
	}

	const items = state.cards.map((item) => {
		return <CardItem key={item.id} card={item} />;
	});

	return <View items={items} />;
};

const View = ({ items }) => {
	return <ul className='cards__list'>{items}</ul>;
};

export default Cards;
