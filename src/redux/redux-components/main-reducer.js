import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
	name: 'reducerMain',
	initialState: {
		cards: [],
		loading: true,
		error: false,
	},
	reducers: {
		loaded(state, action) {
			state.cards = action.payload;
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

export const getCards = () => {
	return (dispatch) => {
		fetch('http://localhost:3005/cards')
			.then((res) => res.json())
			.then((json) => dispatch(loaded(json)))
			.catch((err) => dispatch(error()));
	};
};

export default toolkitSlice.reducer;
export const { loaded, requested, error } = toolkitSlice.actions;
