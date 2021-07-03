import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { requested, getCards } from '../../redux/redux-components/main-reducer';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import CardItem from '../card-item/card-item';

import './_cards.scss';

const Cards = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.mainReducer);

	useEffect(() => {
		dispatch(requested());

		dispatch(getCards());
	}, []);

	if (state.loading) {
		return (
			<div className='d-flex justify-content-center m-5'>
				<Spinner />
			</div>
		);
	}

	if (state.error) {
		return <Error />;
	}

	const items = state.cards.map((item) => {
		return (
			<Link to={`/${item.id}`} style={{display: 'block'}} >
				
				<CardItem key={item.id} card={item} />
			</Link>
		);
	});

	return <View items={items} />;
};

const View = ({ items }) => {
	return <ul className='cards__list'>{items}</ul>;
};

export default Cards;
