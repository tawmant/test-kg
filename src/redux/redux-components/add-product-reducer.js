import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
	name: 'productReducer',
	initialState: {
		product: [],
	},
	reducers: {
		loaded(state, action) {
			state.product = action.payload;
		},
		error(state) {
			state.error = true;
			state.loading = false;
		},
	},
});

export const postProductItem = (data) => {
	return async (dispatch) => {
		const newProductItem = data;
        newProductItem.id = Date.now()

		const response = await fetch(`http://localhost:3005/cards`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(newProductItem),
		});

		if (!response.ok) {
			console.log('post request error');
		}
	};
};

export default toolkitSlice.reducer;
export const { loaded, requested, error } = toolkitSlice.actions;
