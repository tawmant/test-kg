import React, { useState, useEffect } from 'react';
import defaultPhoto from './defaultPhoto.png';
import { postProductItem } from '../../../redux/redux-components/add-product-reducer';
import { useDispatch } from 'react-redux';

import './_add-product-page.scss';

const AddProductPage = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		name: '',
		description: '',
		price: '',
		image: defaultPhoto,
		amount: '',
		id: null,
	});

	let changePhoto =
		data.image === defaultPhoto ? null : (
			<div className='unload d-flex justify-content-center'>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15'
						stroke='#160A29'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M17 8L12 3L7 8'
						stroke='#160A29'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M12 3V15'
						stroke='#160A29'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				<p className='unload-text'>Загрузить новое фото</p>
			</div>
		);

	const addFile = (e) => {
		setData({ ...data, image: URL.createObjectURL(e.target.files[0]) });
	};

	const submitData = (e) => {
		e.preventDefault();

		dispatch(postProductItem(data));

		setData({
			name: '',
			description: '',
			price: '',
			image: defaultPhoto,
			amount: '',
			id: null,
		});
	};

	return (
		<form className='add-product' onSubmit={submitData}>
			<div className='add-product__row'>
				<div className='col-left'>
					<div className='add-product__wrapper'>
						<label htmlFor='input-img'>
							<img
								src={data.image}
								alt=''
								className='add-product__img'
							/>
							<input
								type='file'
								id='input-img'
								onChange={(e) => addFile(e)}
								style={{ display: 'none' }}
							/>
							{changePhoto}
						</label>
					</div>
				</div>
				<div className='col-right'>
					<p className='add-product__text'>Название</p>
					<input
						value={data.name}
						onChange={(e) =>
							setData({ ...data, name: e.target.value })
						}
						type='text'
						placeholder='Название продукта'
					/>

					<p className='add-product__text'>Описание</p>
					<textarea
						value={data.description}
						onChange={(e) =>
							setData({ ...data, description: e.target.value })
						}
						placeholder='Описание продукта'
						cols='30'
						rows='10'></textarea>

					<p className='add-product__text'>Цена</p>
					<input
						value={data.price}
						onChange={(e) =>
							setData({ ...data, price: e.target.value })
						}
						type='text'
						placeholder='Цена продукта'
					/>

					<p className='add-product__text'>Остаток</p>
					<input
						value={data.amount}
						onChange={(e) =>
							setData({ ...data, amount: e.target.value })
						}
						type='text'
						placeholder='Остаток продукта'
					/>
					<button className='add-product__btn' type='submit'>
						Сохранить изменения
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddProductPage;
