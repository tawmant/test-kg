import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const toolkitSlice = createSlice({
	name: 'reducerProductItem',
	initialState: {
		item: {},
		loading: true,
		error: false,
	},
	reducers: {
		loaded(state, action) {
			state.item = action.payload;
			state.loading = false;
		},
		requested(state) {
			state.loading = true;
		},
		error(state) {
			state.error = true;
			state.loading = false;
		},
	},
});

export const getProductItem = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`http://localhost:3005/cards?id=${id}`
			);
			const [item] = await data;

			dispatch(loaded(item));
		} catch {
			dispatch(error());
		}
	};
};

export default toolkitSlice.reducer;
export const { loaded, requested, error } = toolkitSlice.actions;
