import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
	name: 'reducerMain',
	initialState: {
		AllCards: [],
		cards: [],
		loading: true,
		error: false,
		searchValue: '',
	},
	reducers: {
		loaded(state, action) {
			state.AllCards = action.payload;
			state.cards = state.AllCards;
			state.loading = false;
		},
		onUpdateSearch(state, action) {
			state.searchValue = action.payload;

			if (state.searchValue.length === 0) {
				state.cards = state.AllCards;
			}

			state.cards = state.AllCards.filter((item) => {
				return (
					item.name
						.toLowerCase()
						.indexOf(state.searchValue.toLowerCase()) > -1
				);
			});
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
export const { loaded, requested, error, onUpdateSearch } =
	toolkitSlice.actions;
