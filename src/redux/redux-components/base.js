const LOADED = 'LOADED';
const REQUESTED = 'REQUESTED';
const ERROR = 'ERROR';

const initialState = {
	cards: [],
	loading: true,
	error: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADED:
			return {
				...state,
				cards: action.payload,
				loading: false,
			};
		case REQUESTED:
			return {
				...state,
				loading: true,
			};
		case ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};

export const loaded = (cards) => ({ type: LOADED, payload: cards });
export const requested = () => ({ type: REQUESTED });
export const error = () => ({ type: ERROR });

export default reducer;
